/**
 * Array given nums we have to return the index of the target and if target is not present inside the array nums 
 * return the index of the target where is it supposed to be.
 * 
 * Example:
 * 
 * Input 1 nums = [ 1, 3, 5, 7], target = 2
 * Output is = 1 ----> bcz 2 is not present return the index of 2 if it is nit missing in the array.
 * 
 * Input 2 nums = [1, 3, 5, 7], target = 5
 * Output is = 2
 */

function findTarget(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

let nums = [1, 3, 5, 6];
let target = 2;

console.log(findTarget(nums, target));