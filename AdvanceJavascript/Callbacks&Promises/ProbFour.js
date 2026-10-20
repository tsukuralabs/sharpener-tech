function step1() {
  //complete this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 2000);
  });
}

function step2() {
  //complete this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 2 completed");
    }, 1000);
  })
}

function allStepsCompleted() {
  console.log("All steps completed");
}

step1().then((result) => {
  console.log(result);
  step2().then((result) => {
    console.log(result);
    allStepsCompleted();
  });
})

 
// Execute steps in sequence using promises
 
