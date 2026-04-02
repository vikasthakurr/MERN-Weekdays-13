import express from "express";
import authController from "./controllers/auth.controller.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authController);
//for server health
app.get("/health", (req, res) => {
  res.json({ message: "Server is running" });
});
export default app;
