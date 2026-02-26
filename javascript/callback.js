// callback->call+later
/*
=================================================
CALLBACKS IN JAVASCRIPT (WHAT + WHY + PROBLEMS)
=================================================

WHAT IS A CALLBACK?
- A callback is a function passed as an argument to another function.
- The receiving function decides when to execute it.
- "call + back" = call this function back later (or after some work).

Why callbacks are used:
- To run code after a task finishes.
- Very common in async operations:
  - setTimeout
  - file/network/database operations
  - event listeners (click, input, etc.)

Basic shape:
function doTask(cb) {
  // task work...
  cb(); // run next step
}

--------------------------------------
SYNCHRONOUS VS ASYNCHRONOUS CALLBACKS
--------------------------------------
- Synchronous callback:
  - Executed immediately in same call stack.
  - Example in this file currently: `cb()` is called right away.

- Asynchronous callback:
  - Executed later (timer, I/O completion, event loop turn).
  - Example (commented above): setTimeout(() => cb(), 5000)

--------------------------------------
COMMON CALLBACK PROBLEMS (IN DETAIL)
--------------------------------------
1) CALLBACK HELL (PYRAMID OF DOOM)
   - Nested callbacks create deep indentation and hard-to-read code.
   - Debugging flow becomes difficult.
   - Reusing intermediate logic becomes harder.
   - Example pattern:
     step1(() => {
       step2(() => {
         step3(() => {
           step4(...)
         })
       })
     })

2) HARD ERROR HANDLING
   - If one callback throws or fails, every level must handle it manually.
   - Inconsistent error handling leads to silent failures.
   - Standard Node style uses error-first callbacks: cb(err, data).
   - If not followed consistently, code quality drops quickly.

3) LOST CONTROL / INVERSION OF CONTROL
   - You pass your function to external code and trust it to call correctly.
   - Risks:
     - callback called too early
     - callback called too late
     - callback called multiple times
     - callback never called
   - This can create duplicate side effects and unpredictable bugs.

4) MAINTAINABILITY + TESTING DIFFICULTY
   - Complex nested flow is harder to unit test.
   - Harder to reason about ordering and edge cases.
   - Refactoring becomes risky when execution order is implicit.

5) READABILITY ISSUES FOR LONG WORKFLOWS
   - Business logic gets mixed with flow-control boilerplate.
   - Important logic is hidden inside nested anonymous functions.

--------------------------------------
HOW MODERN JS REDUCES THESE PROBLEMS
--------------------------------------
- Promises flatten async chains and centralize error handling with .catch().
- async/await gives near-synchronous readable style.
- Still, callbacks are foundational and used under the hood (events, APIs).

Rule of thumb:
- Small/simple flow: callbacks are fine.
- Multi-step async flow: prefer Promise/async-await for clarity.
*/

function makeMagii(rawmagii, cb) {
  // setTimeout(() => {
  //   console.log(`magii made with ${rawmagii}`);
  //   cb();
  // }, 5000);
  console.log(`magii made with ${rawmagii}`);
  cb();
}

function waterBoil(cb) {
  console.log("water boiled");
  cb();
}

function addMasala(cb) {
  console.log("masala added");
  cb();
}

function serve(cb) {
  console.log("magii served");
  cb();
}

// makeMagii();
// waterBoil();
// addMasala();
// serve();

makeMagii("atamagi", () => {
  // This nested structure demonstrates callback hell for multi-step flow.
  waterBoil(() => {
    addMasala(() => {
      serve(() => {
        console.log("magii wala task is done");
      });
    });
  });
});

//todo
//make a process of sandwich with 6 step
