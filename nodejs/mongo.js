import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
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

app.post("/api/v1/auth/register", async (req, res) => {
  //   const username = req.body.username;
  const { username, email } = req.body;
  let password = req.body.password;
  try {
    // const user= await user.create({ username, email, password });
    let hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();

    if (!savedUser) {
      res.status(400).json({ message: "user not created" });
    } else {
      res.status(201).json({ message: "user created", user: savedUser });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/v1/auth/users", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
