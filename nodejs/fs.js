import fs from "fs";

/**
 * Node.js File System (fs) Module
 * 
 * The 'fs' module provides an API for interacting with the file system in a 
 * manner modeled on standard POSIX functions.
 * 
 * Operations can be performed in two modes:
 * 1. Synchronous (Blocking): The execution of the program stops until the operation is complete.
 *    Methods usually end with 'Sync' (e.g., readFileSync, writeFileSync).
 * 2. Asynchronous (Non-Blocking): The program continues to run while the operation is being
 *    performed. Once finished, a callback function is executed.
 */

// --- 1. Synchronous Operations (Blocking) ---

// Write to a file synchronously
// fs.writeFileSync("vikas.txt", "This is a synchronous write operation.");
// console.log("File written synchronously");

// Delete a file synchronously
// fs.unlinkSync("./vikas.pdf"); 
// console.log("File deleted synchronously");

// Read a file synchronously
// const dataSync = fs.readFileSync("./vikas.txt", "utf-8");
// console.log("Read synchronously:", dataSync);


// --- 2. Asynchronous Operations (Non-Blocking) ---

// Append to a file asynchronously
// fs.appendFile("./vikas.txt", "\nThis is appended asynchronously.", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log("File appended asynchronously");
// });

// Read a file asynchronously
// fs.readFile("./vikas.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file asynchronously:", err);
//     return;
//   }
//   console.log("Read asynchronously:", data);
// });

/**
 * Why use Async?
 * In a web server, blocking operations (Sync) can prevent the server from 
 * handling other requests. Asynchronous operations allow the server to remain 
 * responsive while waiting for I/O tasks to complete.
 */