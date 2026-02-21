// SCOPE IN JAVASCRIPT
// Scope means where a variable is available (can be accessed) in your program.

// 1) GLOBAL SCOPE
// Definition: A variable declared outside all functions/blocks is global.
// It can be accessed from almost anywhere in the same file.
const globalUser = "Vikas";
console.log("Global scope:", globalUser);

// 2) FUNCTION SCOPE
// Definition: Variables declared with `var` inside a function are available
// only inside that function.
function showFunctionScope() {
  var message = "I am function-scoped";
  console.log("Function scope:", message);
}
showFunctionScope();
// console.log(message); // Error: message is not defined

// 3) BLOCK SCOPE
// Definition: Variables declared with `let` or `const` inside `{}` can be used
// only inside that block.
if (true) {
  let blockAge = 21;
  const blockCity = "Delhi";
  console.log("Block scope:", blockAge, blockCity);
}
// console.log(blockAge); // Error: blockAge is not defined
// console.log(blockCity); // Error: blockCity is not defined

// 4) LEXICAL SCOPE
// Definition: Inner functions can access variables from their outer function.
// This is decided by where functions are written (their lexical position).
function outer() {
  const outerValue = "I am from outer function";

  function inner() {
    console.log("Lexical scope:", outerValue);
  }

  inner();
}
outer();

// 5) MODULE SCOPE
// Definition: In ES modules, variables declared at top-level are scoped to the
// module (file) and are not automatically global.
// Example:
// const moduleSecret = "Only this file can access me directly";
// export const publicData = "Can be imported in another file";
// import { publicData } from "./anotherFile.js";

// Extra note:
// `var` is function-scoped, while `let` and `const` are block-scoped.
