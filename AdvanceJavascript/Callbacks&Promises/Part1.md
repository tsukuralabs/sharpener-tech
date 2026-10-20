Here is the completed code using Promises and `.then()` to print the messages in the same order as the callback version.

javascript
```
function buyBike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bought Royal Enfield Himalayan");
    }, 2000);
  });
}

function planTrip() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trip to Ladakh planned");
    }, 1000);
  });
}

function reachLadakh() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reached Ladakh");
    }, 1000);
  });
}

function visitPangongLake() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Visited Pangong Lake");
    }, 500);
  });
}

// Do not touch the code below:
module.exports = {
  buyBike,
  planTrip,
  reachLadakh,
  visitPangongLake,
};
```

How to execute the promises in order

Since the provided code exports the functions, chain them where you call the functions (for example, in your test file):

javascript
```
buyBike()
  .then((message) => {
    console.log(message);
    return planTrip();
  })
  .then((message) => {
    console.log(message);
    return reachLadakh();
  })
  .then((message) => {
    console.log(message);
    return visitPangongLake();
  })
  .then((message) => {
    console.log(message);
  });
```

// ### Expected console output

text
```
Bought Royal Enfield Himalayan
Trip to Ladakh planned
Reached Ladakh
Visited Pangong Lake
```
