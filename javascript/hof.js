// let arr = [1, 2, 3, 4, 5];

// arr.forEach((ele) => console.log(ele))

// arr.map((ele) => console.log(ele * 2));
// console.log(arr);

// const res = arr.filter((ele) => {
//   return ele % 2 == 0;
// });
// console.log(res);
// console.log(arr);

//reduce
// const res = arr.reduce((acc, ele) => {
//   return acc + ele;
// }, 0);
// console.log(res);
// console.log(arr);

let salary = [1000, 2000, 3000, 4000, 5000];
let vikas = [3000, 4000, 5000, 6000, 7000];

function tenPercent(salary) {
  return salary * 0.1;
}

function twentyPercent(salary) {
  return salary * 0.2;
}

Array.prototype.calculateTax = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

// console.log(calculateTax(salary, tenPercent));
console.log(vikas.calculateTax(tenPercent));
console.log(vikas);

// let arr = [1, 2, 3, 4, 5];

// function map(cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(cb(this[i]));
//   }
//   return res;
// }

// arr.double;
