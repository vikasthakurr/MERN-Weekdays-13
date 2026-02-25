let obj1 = {
  fname: "vikas",
  lname: "thakur",
  address: {
    city: "agra",
    state: "up",
  },
};

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