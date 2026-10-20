//? 1st Approach
function add(value) {
    // code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newVal = value + 3;
            resolve(newVal)
        }, 2000);
    })
}

function multiply(value) {
    // code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newValProd = value * 2;
            resolve(newValProd);
        }, 1000);
    })
}

// Initial value
//* const initialValue = 2;

// Execute operations in sequence using promises
add(initialValue).then((result1) => {
    // console.log(result1);
    console.log("Added 3");
    multiply(result1).then((result2) => {
        console.log("Multiplied by 2");

        //* Directly print the result2 ouput
        console.log("Final result:" + " " + result2);
    })
})

//! 2nd Approach
function add(value) {
    // code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newVal = value + 3;
            resolve(newVal)
        }, 2000);
    })
}

function multiply(value) {
    // code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newValProd = value * 2;
            resolve(newValProd);
        }, 1000);
    })
}

function finalResult(value) {
    console.log("Final result:" + " " + value);
}

// Initial value
//* const initialValue = 2;

// Execute operations in sequence using promises
add(initialValue).then((result1) => {
    console.log("Added 3");
    multiply(result1).then((result2) => {
        console.log("Multiplied by 2");

        //* Created the new function unnecessarily
        finalResult(result2)
    })
})