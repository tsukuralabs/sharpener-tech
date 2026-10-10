//? First Occurence

function firstOccurence(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    let firstIdx = -1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            firstIdx = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstIdx;
}

let arr = [1, 2, 2, 3, 4, 5], target = 2;

// let arr = [1, 2, 3, 4, 5], target = 6

console.log(firstOccurence(arr, target));