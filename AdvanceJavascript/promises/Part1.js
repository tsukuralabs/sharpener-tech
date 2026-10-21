//? Problem 1
// console.log('start')

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// });

// console.log('end');

//? Problem 2
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);

//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
//? Problem 3
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);

//   resolve(2);

//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
//? Problem 4
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });

// console.log("end");
//? Problem 5
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);

    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
