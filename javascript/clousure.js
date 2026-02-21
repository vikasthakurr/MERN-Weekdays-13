// CLOSURE IN JAVASCRIPT
// Definition: A closure is created when an inner function remembers and can use
// variables from its outer function even after the outer function has finished.

function outer() {
  // Local variable of outer function (not global).
  let a = 10;

  function inner() {
    // `inner` can access `a` because of lexical scope + closure.
    console.log(a);
  }

  // Returning function `inner` with access to outer variables.
  return inner;
}

// `outer()` runs and returns `inner`. The returned function is stored in `res`.
const res = outer();

// console.log(res);

// When `res()` is called later, it still remembers `a = 10` (this is closure).
res();

// ENCAPSULATION USING CLOSURE
// Definition: Encapsulation means hiding internal data and allowing access only
// through controlled functions (public methods).
function createCounter() {
  // Private variable: cannot be accessed directly from outside.
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Incremented:", count);
    },
    decrement() {
      count--;
      console.log("Decremented:", count);
    },
    getCount() {
      console.log("Current count:", count);
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.getCount();
// console.log(counter.count); // undefined (private data is encapsulated)
