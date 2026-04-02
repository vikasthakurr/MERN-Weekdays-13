import express from "express";
import authController from "./controllers/auth.controller.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authController);
//for server health
app.get("/health", (req, res) => {
  res.json({ message: "Server is running" });
});
export default app;
