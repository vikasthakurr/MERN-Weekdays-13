import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginLimiter, updateLimit } from "./rate.limiter.js";
import asyncHandler from "./asyncHandler.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

//schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post(
  "/api/v1/auth/register",
  asyncHandler(async (req, res) => {
    //   const username = req.body.username;
    const { username, email } = req.body;
    let password = req.body.password;
    // try {
    //   // const user= await user.create({ username, email, password });
    //   let hashedPassword = await bcrypt.hash(password, 10);
    //   const user = new User({ username, email, password: hashedPassword });
    //   const savedUser = await user.save();

    //   if (!savedUser) {
    //     res.status(400).json({ message: "user not created" });
    //   } else {
    //     res.status(201).json({ message: "user created", user: savedUser });
    //   }
    // } catch (err) {
    //   res.status(400).json({ message: err.message });
    // }

    // alternate mathod
    // const user = await User.findOne({ email });
    // if(!user) throw new ApiError(404,"")
  }),
);

app.post("/api/v1/auth/login", loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ message: "user not exist please register first" });

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched)
      return res.status(404).json({ message: "invalid password" });

    //token

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" },
    );

    if (!token)
      return res
        .status(500)
        .json({ message: "server error while generating token" });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    if (!res.cookie) {
      return;
    }

    res.status(200).json({ message: "login successfull", token });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

//verfication middleware

const verificationToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "access denied because no token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
};
app.get("/api/v1/auth/users", verificationToken, async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      res.status(400).json({ message: "no users found" });
    }
    res.status(200).json({ message: "all users", users: allUsers });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update

app.put("/api/users/v1/update/:id", updateLimit, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ message: "failed update" });
    // res.cookie("")
    return res.status(203).json({ message: "user updated" });
  } catch (err) {
    console.log(err);
  }
});

//delete route
app.delete("/api/users/v1/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(501).json({ message: "error deleting user" });
    return res.status(200).json({ message: "successfully deleted" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
