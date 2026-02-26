/*

WHAT IS CURRYING?
- Currying is the technique of transforming a function that takes multiple
  arguments into a sequence of functions, each taking one argument.

Normal function:
  f(a, b, c)

Curried version:
  f(a)(b)(c)


1) PARTIAL APPLICATION / REUSABILITY
   - You can pre-fill some arguments and reuse specialized functions.
   - Example:
     const sendToAbc = xyz("abc@gmail.com");
     const sendSubject = sendToAbc("Interview Update");
     sendSubject("Your profile is shortlisted");

2) BETTER COMPOSITION
   - Small single-argument functions are easier to compose in functional style.

3) CLEARER CONFIGURATION FLOW
   - Useful when setup happens in steps:
     first choose user -> then subject -> then body.

4) DELAYED EXECUTION
   - Logic runs only after final function call receives final argument.

--------------------------------------
EXAMPLES:
- Non-curried approach (commented):
  xyz(to, subject, body)

- Curried approach (commented):
  xyz(to)(subject)(body)

In curried version:
- First function captures `to`.
- Second function captures `subject`.
- Third function captures `body` and performs final action.

This uses closures:
- Inner functions remember variables from outer functions
  even after outer function execution is complete.

--------------------------------------
IMPORTANT NOTES:
- Currying is best when you naturally apply arguments step by step.
- For very simple one-time calls, normal multi-argument function can be clearer.
- JavaScript does not auto-curry functions by default; we write curried
  wrappers manually (or use utility libraries).
*/

// function xyz(to, subject, body) {
//   console.log(
//     "mail sent to " + to + ", subject: " + subject + ", body: " + body,
//   );
// }
// xyz("abc@gmail.com", "subject");

// function xyz(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(
//         "mail sent to " + to + ", subject: " + subject + ", body: " + body,
//       );
//     };
//   };
// }

// xyz("abc@gmail.com")("subject");
