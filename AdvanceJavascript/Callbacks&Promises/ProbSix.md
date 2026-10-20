You can resolve all three promises sequentially using `.then()`. The main issue in your code is that `square()` is called without passing `result2`, so it doesn't receive the value to square.

## 1. Corrected Code

javascript
```

function increment(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value + 1;
            resolve(newValue);
        }, 1200);
    });
}

function double(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value * 2;
            resolve(newValue);
        }, 500);
    });
}

function square(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value * value;
            resolve(newValue);
        }, 1000);
    });
}

// Starting value
const startValue = 2;

// Execute promises sequentially
increment(startValue)
    .then((result1) => {
        return double(result1);
    })
    .then((result2) => {
        return square(result2);
    })
    .then((finalValue) => {
        console.log(finalValue);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//? 2nd Method

increment(startValue).then((result1) => {
    double(result1).then((result2) => {
        square(result2).then((result3) => {
            console.log(result3);
        });
    });
});
```

### Output

text
```
36
```

## 2. Explanation of the Code

### Step 1: `increment(startValue)`

The initial value is `2`.

javascript
```
increment(2)
```

- The function adds `1` to the input.
- It resolves the promise with `3`.
- The next `.then()` receives `3` as `result1`.

Calculation: $2 + 1 = 3$

### Step 2: `double(result1)`

javascript
```
return double(result1);
```

- The input is `3`.
- The function multiplies it by `2`.
- It resolves the promise with `6`.
- The next `.then()` receives `6` as `result2`.

Calculation: $3 \times 2 = 6$

### Step 3: `square(result2)`

javascript
```
return square(result2);
```

- The input is `6`.
- The function multiplies the value by itself.
- It resolves the promise with `36`.

Calculation: $6 \times 6 = 36$

### Step 4: Log the final result

javascript
```
.then((finalValue) => {
    console.log(finalValue);
});
```

This receives the resolved value from `square()` and prints `36`.

## 3. How promise chaining works

The important concept is returning the promise from each `.then()` callback.

Start value: 2

increment(2)

## 3

Adds 1

double(3)

## 6

Multiplies by 2

square(6)

## 36

Multiplies by itself

console.log(36)

### Why use `return`?

When you write:

javascript
```
.then((result1) => {
    return double(result1);
})
```

the promise returned by `double()` becomes part of the chain. The next `.then()` waits for that promise to resolve before executing.

Your original code used nested `.then()` calls, which can work, but promise chaining makes the sequential flow easier to read and maintain.

Remember: Each function receives the previous function's resolved value, and the final `.then()` logs the final result.