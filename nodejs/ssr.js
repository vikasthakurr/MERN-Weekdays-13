import express from "express";
// console.log(express);
import fs from "fs";
import ejs from "ejs";
import path from "path";
import url from "url";

const app = express();
app.use(express.json());
const PORT = 5000;
app.set("view engine", "ejs");
// app.set("views", "views");
app.get("/", (req, res) => {
  res.end("hi from server");
});

app.get("/contact", (req, res) => {
  //   res.end("hi from contact");
  //   res.statusCode = 202;
  //   res.end("hi");
  //   res.status(200).json({ message: "hello from contact" });
  fs.readFile("./contact.html", "utf-8", (err, data) => {
    if (err) res.status(404).json({ err: err.message });
    res.status(200).send(data);
  });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/products", (req, res) => {
  //   res.json("./product.json");
  fs.readFile("./product.json", "utf-8", (err, data) => {
    if (err) res.status(404).json({ message: "page not found" });
    res.status(200).json(data);
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "login successful" });
});
app.listen(PORT, () => {
  console.log("server started");
});
