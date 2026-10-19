## Callbacks Functions
- They are passed as **arguments** inside the another function.
- Which we want to run when something is happen.

### Synchronous Task
```js
function orderPopcorn() {
    setTimeout(() => {
        console.log("Popcorn ordered");
    }, 3000);
}

function popcornReceived() {
    setTimeout(() => {
        console.log("Popcorn received");
    }, 4000);
}

function goToMovie() {
    setTimeout(() => {
        console.log("Went for movie");
    }, 5000);
}

orderPopcorn();
popcornReceived();
goToMovie();
```

### Asynchronous Task
```js
function ordeMeal() {
    console.log("Meal ordered");
    setTimeout(() => {
        returnFromPlayZone();
        console.log("Meal ready");
    }, 2000);
}

function goToPlayZone() {
    console.log("Went for play zone");
    // setTimeout(() => {
    //     console.log("Popcorn received");
    // }, 4000);
}

function returnFromPlayZone() {
    console.log("Returned from Play Zone & enjoying meal");
    // setTimeout(() => {
    //     console.log("Went for movie");
    // }, 5000);
}

ordeMeal();
goToPlayZone();
returnFromPlayZone();
```