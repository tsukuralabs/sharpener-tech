//? Problem 1
// console.log("start");

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });

// console.log("end");

//? Problem 2
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

//? Problem 3
// const promise = new Promise((resolve, reject) => {
//   console.log(1); // 1st

//   setTimeout(() => {
//     console.log("timerStart"); // 4th

//     resolve("success"); // 6th

//     console.log("timerEnd"); // 5th
//   }, 0);

//   console.log(2); // 2nd
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4); // 3rd

//? Problem 4
// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

//? Problem 5
console.log("start"); // 1st

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");

  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");

  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end"); // 2nd
