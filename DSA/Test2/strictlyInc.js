/**
 * Problem Statement

Abhijit has an Array Arr which may or may not be in strictly increasing order. He wants to make this array increasing but does not wish 
to change the position of any element so he came with an idea that he will replace an element with any of its divisors i.e 
he changes an element X to M if X%M==0.

Your task is to tell whether the given array can be transformed to strictly increasing by performing the operation given above.

Input

First line contains T Number of test cases

second line of input contains the size of the array N. Next line of input contains N space- separated integers depicting the values of the array Arr




Constraints:-

1<=T<=100

1 <= N <= 100000

1 <= Arr[i] <= 100000

Output

Return "YES" if the array can be transformed in the strictly increasing order else return "NO".

Example

Sample Input:-
1
5
1 2 16 16 16

Sample Output:-
YES

Resultant Array is 1 2 4 8 16
 */