async function LadakhCalling() {
  try {
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

    const step1 = await buyBike();
    console.log(step1);

    const step2 = await planTrip();
    console.log(step2);

    const step3 = await reachLadakh();
    console.log(step3);

    visitPangongLake();


  } catch (err) {
    console.log(err);
  }
}

LadakhCalling();
