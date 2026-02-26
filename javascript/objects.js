let obj1 = {
  fname: "vikas",
  lname: "thakur",
  address: {
    city: "agra",
    state: "up",
  },
};

/*
==========================================================
REST VS SPREAD OPERATOR (...): SAME SYMBOL, DIFFERENT USE
==========================================================

1) REST OPERATOR (collect values)
   - "Rest" means "take the remaining values and pack them into one variable".
   - Used mainly in:
     a) Function parameters -> function fn(...args) {}
     b) Array destructuring -> const [first, ...rest] = arr;
     c) Object destructuring -> const { a, ...restObj } = obj;

   Example:
   const [first, ...others] = [10, 20, 30, 40];
   // first = 10
   // others = [20, 30, 40]

   function sum(...nums) {
     // nums is a real array, not "arguments" object
     return nums.reduce((acc, n) => acc + n, 0);
   }
   // sum(1,2,3,4) => 10

2) SPREAD OPERATOR (expand values)
   - "Spread" means "take an iterable/object and unpack it".
   - Used mainly in:
     a) Function calls -> fn(...arr)
     b) Array literals -> const merged = [...a1, ...a2]
     c) Object literals -> const clone = { ...obj }

   Example:
   const a = [1, 2];
   const b = [3, 4];
   const merged = [...a, ...b]; // [1,2,3,4]

   const user = { name: "Vikas", city: "Agra" };
   const updated = { ...user, city: "Delhi" };
   // updated.city becomes "Delhi" (later keys override earlier keys)

Important:
   - Rest collects.
   - Spread expands.
*/

/*
=====================================
SHALLOW COPY VS DEEP COPY IN OBJECTS
=====================================

SHALLOW COPY:
   - Creates a new top-level object/array.
   - Nested objects/arrays are still shared references.
   - If nested data is changed in copy, original also changes.

   Common shallow-copy methods:
   - const copy = { ...obj }
   - const copy = Object.assign({}, obj)
   - const arrCopy = [...arr]

   In this file:
   const obj2 = { ...obj1 }; // shallow
   obj2.fname = "akash";         // only obj2 changes (primitive at top level)
   obj2.address.city = "delhi";  // both obj1 and obj2 change (shared nested object)

DEEP COPY:
   - Creates completely independent copy at all levels.
   - Nested objects/arrays are also copied.
   - Changes in copied nested data do not affect original.

   Common deep-copy methods:
   1) structuredClone(obj)  [recommended in modern JS]
      - Handles nested objects, arrays, Date, Map, Set, etc.
      - Does not clone functions.

   2) JSON.parse(JSON.stringify(obj))
      - Works for plain JSON-safe data only.
      - Loses undefined, function, Symbol, Date type details, Infinity, etc.
      - Fails on circular references.

Reference behavior:
   - let obj2 = obj1; // not copy, only reference alias
     Any change through obj2 directly affects obj1, because both point to same object.
*/

// let obj2 = obj1;
// let obj2 = { ...obj1 };
// let obj2 = structuredClone(obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.fname = "akash";
// obj2.address.city = "delhi";

// console.log(obj2);
// console.log(obj1);

// let fruits = ["apple", "banana", "cherry"];

// let [second, ...rest] = fruits;
// // console.log(first);
// console.log(rest[0]);
// console.log(second);

//multiple argument

// function sum(a, b, c) {
//   return a + b + c;
// }
// let res = sum(10, 20, 50);
// console.log(res);

// function sum(...args) {
//   //   console.log(args);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// }

// sum(
//   10,
//   20,
//   50,
//   100,
//   200,
//   3,
//   5,
//   6,
//   433,
//   45,
//   67,
//   42,
//   24,
//   67,
//   32,
//   24,
//   6778,
//   43,
//   2,
// );

// let person1 = {
//   fname: "ravi",
//   lname: "kumar",
//   print: function (city) {
//     console.log(this.fname + " " + this.lname, "from", city);
//   },
// };

// let person2 = {
//   fname: "vishal",
//   lname: "sharma",
// };

// // person1.print.call(person2, "agra");
// // person1.print.apply(person2, ["agra"]);
// // person1.print.bind(person2, "agra");

// let person3 = person1.print.bind(person2, "agra");
// // person3();
// console.log(person3);

let response = {
  status: 200,
  message: "success",
  data: {
    name: "vikas",
    age: 21,
    city: "agra",
  },
};
// let {data:{city}} = response} = response;
