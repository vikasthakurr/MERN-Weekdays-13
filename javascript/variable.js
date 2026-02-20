/*
  JavaScript Variables - Student Notes
  ------------------------------------
  Variable means a named storage location for data.
*/

// 1) var
// Definition: `var` is the old way to declare variables in JavaScript.
// Scope: Function scope (or global if declared outside a function).
// Re-declare: Allowed
// Re-assign: Allowed
// Hoisting: Yes (initialized with `undefined`)
var age = 20;
var age = 21; // re-declare is possible with var
age = 22; // re-assign is possible
console.log("var age:", age);

// 2) let
// Definition: `let` is a modern way to declare variables whose value can change.
// Scope: Block scope (works inside { } only where declared)
// Re-declare: Not allowed in same scope
// Re-assign: Allowed
// Hoisting: Yes, but in Temporal Dead Zone (cannot use before declaration)
let marks = 75;
marks = 80; // re-assign is allowed
console.log("let marks:", marks);

// 3) const
// Definition: `const` is used for values that should not be re-assigned.
// Scope: Block scope
// Re-declare: Not allowed
// Re-assign: Not allowed
// Hoisting: Yes, but in Temporal Dead Zone
const pi = 3.14;
console.log("const pi:", pi);

// 4) Block scope example (`let` and `const`)
{
  let city = "Ahmedabad";
  const country = "India";
  console.log("Inside block:", city, country);
}
// console.log(city); // Error: city is block-scoped
// console.log(country); // Error: country is block-scoped

// 5) Function scope example (`var`)
function printUser() {
  var userName = "Rahul";
  console.log("Inside function:", userName);
}
printUser();
// console.log(userName); // Error: userName is function-scoped

// 6) Temporal Dead Zone (TDZ) example
// console.log(score); // Error: Cannot access 'score' before initialization
let score = 100;
console.log("score:", score);
