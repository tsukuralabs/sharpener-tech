//! Javascript Iterators.
function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        // next function.
        next() {
            let result;
            if (iterationCount < end) {
                result = { value: nextStart, done: false }
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true }
        }
    }
}

const myIterator = makeIterator(1, 10, 2);

let result = myIterator.next();
while (!result.done) {
    console.log(result.value);
    result = myIterator.next();
}



