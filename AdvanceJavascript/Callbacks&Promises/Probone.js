// Write your code at relevant places in the code below:
function buyBike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bought Royal Enfield Himalayan");
    }, 2000)
  });
}

function planTrip() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trip to Ladakh planed")
    }, 1000);
  })
}

function reachLadakh() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reached Ladakh")
    }, 1000);
  })
}

function visitPangongLake() {
  return new Promise(() => {
    setTimeout(() => {
      resolve("Visited Pangong Lake")
    }, 500);
  })
}

//? I learned from sharpener Naive Approach
buyBike().then((result) => {
  console.log(result);
  planTrip.then((result) => {
    console.log(result);
    reachLadakh.then((result) => {
      console.log(result);
      visitPangongLake();
    })
  })
})


//! Most Popular
// async function buyBike() {
//   try {
//     const step1 = await planTrip();
//     console.log(step1);
    
//     const step2 = await reachLadakh();
//     console.log(step2);
    
//     const step3 = await visitPangongLake();
//     console.log(step3);
    
//   } catch (error) {
//     console.error("Something went wrong:", error);
//   }
// }

// // Call the function to execute the steps
// makeCoffee();

//? Most Popular
// This runs all tasks at the exact same time (concurrently)
// Promise.all([buyBike(), planTrip(), reachLadakh(), visitPangongLake()])
//   .then((results) => {
//     // results is an array containing the resolved values of all promises
//     console.log(results[0]); // "buyBike"
//     console.log(results[1]); // "planTrip"
//     console.log(results[2]); // "reachLadakh"
//     console.log(results[3]); // "visitPangongLake"
//   })
//   .catch((error) => {
//     console.error("One of the steps failed:", error);
//   });


// Do not touch the code below:
module.exports = {
  buyBike,
  planTrip,
  reachLadakh,
  visitPangongLake,
};
