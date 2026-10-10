/**
 * Example 1
 * Input: nums = [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 * 
 * Explanation:
 * For index 0: 2 × 3 × 4 = 24
 * For index 1: 1 × 3 × 4 = 12
 * For index 2: 1 × 2 × 4 = 8
 * For index 3: 1 × 2 × 3 = 6
 */

//? brute approach
// function findProduct(nums) {

//   let res = [];

//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;

//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j]
//       }
//     }
//     res.push(product);
//   }
//   return res;
// }


//? Optimal approach

function findProduct(nums) {
  const res = new Array(nums.length).fill(1);

  // Prefix products
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix products
  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}

let nums = [1, 2, 3, 4]
console.log(findProduct(nums));