function busBoardAtTen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isArrivedOnTime = false;

            if (isArrivedOnTime) {
                resolve("Board the bus")
            } else {
                reject("Error: Bus is late");
            }
        })
    })
}

busBoardAtTen().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})