function add(value, callback) {
  // complete this function
  setTimeout(() => {
    console.log("Added 3");
    let sum = value + 3
    // console.log('Added', sum);
    callback(sum)
  }, 2000);
}

function multiply(value, callback) {
  // complete this function
  setTimeout(() => {
    let product = value * 2;
    console.log('Multiplied by 2');
    callback(product);
  }, 1000);
}

// don't change it
const initialValue = 2;

// create callback hell 
add(initialValue, (sum) => {
  multiply(sum, (finalResult) => {
    console.log("Final Result:", + finalResult)
  });
});
