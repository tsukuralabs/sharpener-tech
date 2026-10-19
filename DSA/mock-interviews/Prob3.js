//? Remove Duplicates

function removeDuplicates(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

// let arr = [1, 1, 2];

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(arr));