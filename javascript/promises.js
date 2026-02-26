/*
======================================================
PROMISES IN JAVASCRIPT (CONCEPT + METHODS + PATTERNS)
======================================================

WHAT IS A PROMISE?
- A Promise is an object that represents the eventual result of an async task.
- It helps avoid deeply nested callbacks and gives cleaner async flow.

PROMISE STATES:
1) pending   -> initial state, operation still running
2) fulfilled -> operation successful (resolved with a value)
3) rejected  -> operation failed (rejected with an error/reason)

Important:
- Once fulfilled or rejected, state is final (cannot change again).

--------------------------------------
CORE INSTANCE METHODS
--------------------------------------
1) .then(onFulfilled)
   - Runs when promise is fulfilled.
   - Receives resolved value.
   - Returns a new promise, enabling chaining.

2) .catch(onRejected)
   - Runs when any previous step rejects/throws.
   - Central place for error handling in chain.

3) .finally(onFinally)
   - Runs in both success and failure cases.
   - Useful for cleanup (hide loader, close resource, log completion).
   - Does not receive resolved data/error as primary payload.

--------------------------------------
PROMISE CHAINING RULES
--------------------------------------
- Returning normal value from `.then` passes value to next `.then`.
- Returning another Promise waits for it before next step.
- Throwing error (or returning rejected Promise) jumps to nearest `.catch`.

--------------------------------------
STATIC PROMISE METHODS (MOST USED)
--------------------------------------
1) Promise.resolve(value)
   - Creates an already-fulfilled Promise.

2) Promise.reject(error)
   - Creates an already-rejected Promise.

3) Promise.all([p1, p2, ...])
   - Waits for all promises to fulfill.
   - If any one rejects, whole result rejects immediately.
   - Use when all results are required.

4) Promise.allSettled([p1, p2, ...])
   - Waits for all promises to finish (fulfilled/rejected).
   - Never rejects due to individual failures.
   - Returns status objects for each promise.

5) Promise.race([p1, p2, ...])
   - Settles as soon as first promise settles
     (first fulfilled OR first rejected).
   - Use for timeout-style patterns.

6) Promise.any([p1, p2, ...])
   - Resolves with first fulfilled promise.
   - Rejects only if all promises reject (AggregateError).
   - Use when any successful response is acceptable.

--------------------------------------
ABOUT THIS EXAMPLE BELOW
--------------------------------------
- `fetch(...)` returns a Promise<Response>.
- First `.then` parses body with `res.json()` (also returns Promise).
- Next `.then` gets parsed data object.
- `.catch` handles network/parsing/chain errors.
- `.finally` always runs at the end.
*/

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("fetching is done"));
