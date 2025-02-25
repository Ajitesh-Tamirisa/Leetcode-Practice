// https://leetcode.com/problems/number-of-1-bits/

// 191. Number of 1 Bits

// Given a positive integer n, write a function that returns the number of 
// set bits in its binary representation (also known as the Hamming weight).

// Example 1:
// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.

// Example 2:
// Input: n = 128
// Output: 1
// Explanation:
// The input binary string 10000000 has a total of one set bit.

// Example 3:
// Input: n = 2147483645
// Output: 30
// Explanation:
// The input binary string 1111111111111111111111111111101 has a total of thirty set bits. 

// Constraints:
// 1 <= n <= 231 - 1

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // Brian Kernighan’s Algorithm for Counting Set Bits
    // The algorithm counts the number of 1 bits (set bits) in a binary representation of a number using bitwise operations. 
    // Instead of checking each bit one by one, it removes the lowest set bit in each iteration, making it much faster.
    let count = 0;
    while(n!==0){
        count++;
        n &= n-1;
    }
    return count;
};
