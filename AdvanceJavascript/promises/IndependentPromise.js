const amanPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const payBack = false;

        if (payBack) {
            resolve("Aman paid back")
        } else {
            reject("Aman did not pay back");
        }
    }, 3000);
})

const ramanPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const payBack = true;

        if (payBack) {
            resolve("Raman paid back")
        } else {
            reject("Raman did not pay back");
        }
    }, 1000);
})

const chamanPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const payBack = true;

        if (payBack) {
            resolve("Chaman paid back")
        } else {
            reject("Chaman did not pay back");
        }
    }, 2000);
})


//? Method 1
// amanPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })

// ramanPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })

// chamanPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })

//! here then aonly get called when all the promises get resolved
//? Method 2
Promise.all([amanPromise, ramanPromise, chamanPromise])
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

