import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import registerController from "./register.controller.js";
import loginController from "./login.controller.js";
import usersController from "./users.controller.js";
import orderController from "./order.controller.js";
import { loginLimiter, updateLimit } from "../config/rate.limiter.config.js";

const authController = express();

authController.post("/register", registerController);
authController.post("/login", loginLimiter, loginController);
authController.put("/update/:id", updateLimit, usersController.updateUser);
authController.delete("/delete/:id", usersController.deleteUser);
authController.get("/users", usersController.getAllUsers);
authController.get("/orders", orderController.getAllOrders);

export default authController;
