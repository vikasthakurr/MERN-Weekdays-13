/**
 * Node.js HTTP Module
 * 
 * The 'http' module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
 * It is primarily used to create web servers that can listen for incoming requests and 
 * send back responses.
 */

// import http from "http";

/**
 * 1. Creating a Server
 * The createServer() method takes a callback function that is executed whenever 
 * a request is made to the server.
 * 
 * The callback has two main parameters:
 * - req (Request): Contains information about the incoming request (URL, method, headers, etc.)
 * - res (Response): Used to send data back to the client.
 */

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   // req.url: The URL path of the request (e.g., '/', '/contact')
//   // req.method: The HTTP method (e.g., 'GET', 'POST')
  
//   // res.setHeader(): Sets HTTP response headers
//   // res.statusCode: Sets the HTTP status code (e.g., 200 for OK, 404 for Not Found)
  
//   if (req.url === "/") {
//     res.end("Hello from Home Page");
//   } else if (req.url === "/contact") {
//     res.end("Hello from Contact Page");
//   } else if (req.url === "/product") {
//     res.end("Hello from Product Page");
//   } else {
//     res.statusCode = 404;
//     res.end("Page Not Found");
//   }
// });

/**
 * 2. Listening for Requests
 * The listen() method starts the server and makes it listen for connections 
 * on a specified port.
 */
// server.listen(PORT, () => {
//   console.log(`HTTP Server started on port ${PORT}`);
// });

/**
 * 3. Transition to Express
 * While the 'http' module is powerful, it becomes difficult to manage as the application grows.
 * Express.js is a framework built ON TOP of the 'http' module that simplifies:
 * - Routing (path handling)
 * - Middleware (authentication, logging, etc.)
 * - Parsing request bodies (JSON, forms)
 * - Rendering views (EJS, Pug, etc.)
 */

import express from "express";
// console.log(express);
import fs from "fs";
import ejs from "ejs";
import path from "path";
import url from "url";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
const PORT = 3000;
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
