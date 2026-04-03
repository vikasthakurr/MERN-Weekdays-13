import express from "express";
import Order from "../models/orders.model.js";
import User from "../models/users.model.js";
import asyncHandler from "../utils/asynchandler.utils.js";
import ApiError from "../utils/api.error.utils.js";
import verifyToken from "../middlewares/verifytoken.middleware.js";
import {
  createOrderLimiter,
  getOrdersLimiter,
} from "../config/rate.limiter.config.js";
import sendEmail from "../utils/send.mail.utils.js";



const STATUS_LABELS = {
  pending: "⏳ Order Received",
  processing: "🔧 Being Processed",
  shipped: "🚚 Shipped",
  delivered: "✅ Delivered",
  cancelled: "❌ Cancelled",
};

function orderConfirmationHtml(order, user) {
  const rows = order.orderItems
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0">${item.name}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:center">${item.qty}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:right">$${(item.price * item.qty).toFixed(2)}</td>
      </tr>`,
    )
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px">
    <div style="background:#2874f0;padding:20px 24px;border-radius:8px 8px 0 0">
      <h1 style="color:#fff;margin:0;font-size:20px">Order Confirmed 🎉</h1>
    </div>
    <div style="background:#fff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e8e8e8">
      <p style="color:#333">Hi <strong>${user.name}</strong>, thanks for your order!</p>
      <p style="color:#555;font-size:14px">Order ID: <code style="background:#f5f5f5;padding:2px 6px;border-radius:4px">${order._id}</code></p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px">
        <thead>
          <tr style="background:#f5f5f5">
            <th style="padding:8px 12px;text-align:left;color:#555">Item</th>
            <th style="padding:8px 12px;text-align:center;color:#555">Qty</th>
            <th style="padding:8px 12px;text-align:right;color:#555">Price</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div style="text-align:right;font-size:15px;font-weight:bold;color:#222;border-top:2px solid #f0f0f0;padding-top:12px">
        Total: $${order.totalPrice.toFixed(2)}
      </div>
      <p style="margin-top:20px;font-size:13px;color:#888">We'll notify you as your order status changes. Thank you for shopping with us!</p>
    </div>
  </div>`;
}

function statusUpdateHtml(order, user) {
  const label = STATUS_LABELS[order.status] || order.status;
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px">
    <div style="background:#2874f0;padding:20px 24px;border-radius:8px 8px 0 0">
      <h1 style="color:#fff;margin:0;font-size:20px">Order Status Update</h1>
    </div>
    <div style="background:#fff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e8e8e8">
      <p style="color:#333">Hi <strong>${user.name}</strong>,</p>
      <p style="color:#555;font-size:14px">Your order <code style="background:#f5f5f5;padding:2px 6px;border-radius:4px">${order._id}</code> has been updated.</p>
      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-left:4px solid #2874f0;border-radius:4px;font-size:16px;font-weight:bold;color:#2874f0">
        ${label}
      </div>
      <p style="font-size:13px;color:#888">Total: <strong>$${order.totalPrice.toFixed(2)}</strong></p>
      <p style="font-size:13px;color:#aaa;margin-top:16px">If you have questions, reply to this email.</p>
    </div>
  </div>`;
}

const orderController = express.Router();

// POST /api/v1/orders — create a new order
// requires: user (from token), orderItems[], totalPrice
const createOrder = asyncHandler(async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    throw new ApiError(400, "No order items provided");
  }

  const order = await Order.create({
    user: req.user.id,
    orderItems,
    totalPrice,
  });

  // send confirmation email (non-blocking — don't fail the request if mail fails)
  // try {
  //   const user = await User.findById(req.user.id).select("name email");
  //   if (user?.email) {
  //     await sendEmail(
  //       user.email,
  //       "Order Confirmed — Thank you for your purchase!",
  //       `Hi ${user.name}, your order (${order._id}) has been placed. Total: $${order.totalPrice.toFixed(2)}`,
  //       orderConfirmationHtml(order, user)
  //     );
  //   }
  // } catch (mailErr) {
  //   console.error("Order confirmation email failed:", mailErr.message);
  // }

  res.status(201).json({ order });
});

// GET /api/v1/orders — get all orders (admin use)
const getAllOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.status(200).json({ orders });
});

// GET /api/v1/orders/myorders — get orders for the logged-in user
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.status(200).json({ orders });
});

// GET /api/v1/orders/:id — get a single order by id
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email",
  );
  if (!order) throw new ApiError(404, "Order not found");

  res.status(200).json({ order });
});

// PUT /api/v1/orders/:id/status — update order status
// setting status to "delivered" automatically marks isPaid and isDelivered
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");

  order.status = status;

  if (status === "delivered") {
    order.isPaid = true;
    order.isDelivered = true;
  }

  await order.save();

  // send status update email (non-blocking)
  try {
    const user = await User.findById(order.user).select("name email");
    if (user?.email) {
      await sendEmail(
        user.email,
        `Your order status: ${STATUS_LABELS[status] || status}`,
        `Hi ${user.name}, your order (${order._id}) status has been updated to: ${status}.`,
        statusUpdateHtml(order, user),
      );
    }
  } catch (mailErr) {
    console.error("Status update email failed:", mailErr.message);
  }

  res.status(200).json({ order });
});

// DELETE /api/v1/orders/:id — delete an order
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");

  await order.deleteOne();
  res.status(200).json({ message: "Order deleted successfully" });
});

// routes
orderController.post("/", createOrderLimiter, verifyToken, createOrder);
orderController.get("/", getOrdersLimiter, verifyToken, getAllOrders);
orderController.get("/myorders", verifyToken, getUserOrders);
orderController.get("/:id", verifyToken, getOrderById);
orderController.put("/:id/status", verifyToken, updateOrderStatus);
orderController.delete("/:id", verifyToken, deleteOrder);

export default orderController;
