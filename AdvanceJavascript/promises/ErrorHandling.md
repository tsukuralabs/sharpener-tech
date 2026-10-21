## Promise & Error Handling
- 

## Independent Promises
- There are 3 promises:
1. p1
2. p2
3. p3


**Case1**. They are completely independent of each other.
- [Promise1.then().Promise2.then().Promise3()]
**Case2**. They independent, but we want to resolve them simultaneously.
- [Promise.all]
- **Simultaneously** means all the promises should be resolved not any of them get rejected.
```js
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


//! here then aonly get called when all the promises get resolved
//? Method 2
Promise.all([amanPromise, ramanPromise, chamanPromise])
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
```