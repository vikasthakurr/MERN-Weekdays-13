import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

// Serve static files from public/dist (Vite build output directory)
const staticDir = path.join(process.cwd(), "public", "dist");
app.use(express.static(staticDir));

// Also fallback to public for any direct static assets (optional)
app.use(express.static(path.join(process.cwd(), "public")));

const PORT = 3000;

//middleware to check user credentials

// let username = "himanshu";
// let password = "1234";
// app.use((req, res, next) => {
//   if (req.body.username === username) {
//     next();
//   } else {
//     res.status(400).json({ message: "incorrect username" });
//   }
// });

// app.use((req, res, next) => {
//   if (req.body.password === password) {
//     next();
//   } else {
//     res.status(404).json({ message: "invalid credentials" });
//   }
// });

// app.use((req, res, next) => {
//   fs.appendFile(
//     "./entry.txt",
//     `\n${req.body.username} logged in at ${Date.now()}`,
//     (err, data) => {
//       if (err) res.status(400).json({ err: err.message });
//       res.status(200).json({ message: "entry done" });
//       next();
//     },
//   );
// // });
app.get("/", (req, res) => {
  //   res.end("hi from server");
});

app.post("/login", (req, res) => {
  // res.cookie({})
  res.status(200).send(req.body.username, req.body.password);
});

// Example signup route (normal route handler)
app.post("/register", (req, res, next) => {
  try {
    // Perform registration logic here
    // e.g., validate req.body, save user, etc.
    const { username, password } = req.body;
    if (!username || !password) {
      const error = new Error("username and password are required");
      error.status = 400;
      throw error;
    }

    // Simulate success
    res.status(201).json({ message: "user registered", user: { username } });
  } catch (err) {
    next(err);
  }
});

// Generic global error handler (must be after routes)
app.use((err, req, res, next) => {
  console.error("Error middleware:", err);
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ status, message });
});

app.listen(PORT, () => {
  console.log("server started");
});
