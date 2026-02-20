/*
  Stack vs Heap Memory in JavaScript - Student Notes
  --------------------------------------------------

  1) Stack Memory
  - Fast memory area.
  - Stores primitive values directly.
  - Also stores function execution context (call stack frames).
  - Works in LIFO order (Last In, First Out).

  2) Heap Memory
  - Large, dynamic memory area.
  - Stores non-primitive values (objects, arrays, functions).
  - Variables keep a reference (address) to heap data.

  3) Primitive Data Types (Usually Stack Value)
  - String, Number, BigInt, Boolean, Undefined, Null, Symbol
  - Copy behavior: value is copied (independent copy).

  4) Non-Primitive / Reference Types (Heap Value)
  - Object, Array, Function
  - Copy behavior: reference is copied (both variables point to same data).

  5) Important Note
  - JavaScript engines manage memory internally, so "stack vs heap"
    is a conceptual model for learning copy/reference behavior.
*/

// --------------------------------------------------
// Primitive example (value copy)
// --------------------------------------------------
let a = 10;
let b = a; // b gets a separate copy of value 10
b = 30;

console.log("Primitive a:", a); // 10
console.log("Primitive b:", b); // 30

// --------------------------------------------------
// Reference example with Object (reference copy)
// --------------------------------------------------
let user1 = { name: "Vikas" };
let user2 = user1; // user2 gets same reference
user2.name = "Akash";

console.log("Object user1:", user1); // { name: "Akash" }
console.log("Object user2:", user2); // { name: "Akash" }

// --------------------------------------------------
// Reference example with Array
// --------------------------------------------------
let arr1 = [1, 2, 3];
let arr2 = arr1; // same reference
arr2.push(4);

console.log("Array arr1:", arr1); // [1, 2, 3, 4]
console.log("Array arr2:", arr2); // [1, 2, 3, 4]

// --------------------------------------------------
// How to create independent copy of reference types
// --------------------------------------------------
let original = { city: "Surat" };
let copied = { ...original }; // shallow copy
copied.city = "Ahmedabad";

console.log("Original object:", original); // { city: "Surat" }
console.log("Copied object:", copied); // { city: "Ahmedabad" }
