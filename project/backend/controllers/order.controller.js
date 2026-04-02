import asyncHandler from "../utils/asynchandler.utils.js";

export const getAllOrders = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "all orders" });
});

export const orderController = {
  getAllOrders,
};
