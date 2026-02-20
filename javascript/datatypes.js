/*
  JavaScript Data Types - Student Notes
  -------------------------------------
  Data type tells what kind of value a variable stores.
*/

// JavaScript has 2 main categories:
// 1) Primitive data types
// 2) Non-primitive (reference) data types

// --------------------------------------------------
// 1) Primitive Data Types
// --------------------------------------------------

// (a) String
// Definition: Text data written inside single quotes, double quotes, or backticks.
let studentName = "Vikas";
console.log("String:", studentName, "| type:", typeof studentName);

// (b) Number
// Definition: Numeric values (integers and decimals).
let age = 21;
let salary = 12345.67;
console.log("Number:", age, salary, "| type:", typeof age);

// (c) BigInt
// Definition: Very large integer values (write `n` at the end).
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, "| type:", typeof bigNumber);

// (d) Boolean
// Definition: Logical value, only `true` or `false`.
let isMarried = false;
console.log("Boolean:", isMarried, "| type:", typeof isMarried);

// (e) Undefined
// Definition: A variable declared but not assigned any value.
let address;
console.log("Undefined:", address, "| type:", typeof address);

// (f) Null
// Definition: Intentional empty value.
// Note: `typeof null` gives "object" (this is a known JavaScript behavior).
let middleName = null;
console.log("Null:", middleName, "| type:", typeof middleName);

// (g) Symbol
// Definition: Unique identifier value (mostly used in advanced object keys).
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId, "| type:", typeof uniqueId);

// --------------------------------------------------
// 2) Non-Primitive (Reference) Data Types
// --------------------------------------------------

// (a) Object
// Definition: Collection of key-value pairs.
let obj = {
  name: "Vikas",
  city: "Surat",
};
console.log("Object:", obj, "| type:", typeof obj);

// (b) Array
// Definition: Ordered list of values (special type of object).
let arr = [10, 20, 30];
console.log("Array:", arr, "| type:", typeof arr);

// (c) Function
// Definition: Reusable block of code. Function is also treated as an object in JS.
function greet() {
  console.log("Hello students");
}
greet();
console.log("Function type:", typeof greet);

// --------------------------------------------------
// Primitive vs Reference Behavior
// --------------------------------------------------

// Primitive copy creates a new independent value.
let a = 10;
let b = a;
b = 30;
console.log("Primitive copy:", a, b); // a = 10, b = 30

// Reference copy points to the same object in memory.
let user1 = { name: "Rahul" };
let user2 = user1;
user2.name = "Akash";
console.log("Reference copy:", user1, user2); // both show name: "Akash"
