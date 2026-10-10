/**
 *? Minimum requirement for palindrome
 * You have given a string , You have to add characters at start of string to make it a palindrome .
 * return the minimum number of characters required to add to make it a palindrome.
 * Example 1:
Input:
str = "abcd"
Output: 3
Explanation: Inserted character marked with bold characters in dcbabcd

* Example 2:
Input:
str = "aa"
Output: 0
Explanation:"aa" is already a palindrome.

*Constraints:
1 ≤ |str| ≤ 10^3
str contains only lower case alphabets.
 */

var minimum_count = function (s) {
  const rev = s.split("").reverse().join("");
  const concat = s + "#" + rev;
  const lps = new Array(concat.length).fill(0);

  let i = 1;
  let j = 0;

  while (i < concat.length) {
    if (concat[i] === concat[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  const longestPrefix = lps[concat.length - 1];
  return s.length - longestPrefix;
};
