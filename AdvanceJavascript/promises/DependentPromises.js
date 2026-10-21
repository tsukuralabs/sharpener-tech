function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foodDelivered = false;
      if (foodDelivered) {
        resolve("Food delivered");
      } else {
        reject("Food not delivered");
      }
    }, 2000);
  });
}

function orderDesert() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const desertDelivered = false;
      if (desertDelivered) {
        resolve("Desert delivered");
      } else {
        reject("Desert not delivered");
      }
    }, 2000);
  });
}
orderFood().then((foodMsg) => {
    console.log(foodMsg);
    return orderDesert();
}).then((desertMsg) => {
    console.log(desertMsg);
    console.log("Dream Meal fulfilled")
}).catch((err) => {
    console.log(err);
    console.log("Dream Meal failed")
})