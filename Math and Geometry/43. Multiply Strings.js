// 43. Multiply Strings

// https://leetcode.com/problems/multiply-strings/

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly. 

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"
 
// Constraints:
// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //  digit-by-digit multiplication
    let m = num1.length, n = num2.length, base = '0'.charCodeAt(0);
    let result = new Array(m+n).fill(0);
    for(let i=m-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            let temp = (num1[i].charCodeAt(0)-base) * (num2[j].charCodeAt(0)-base);
            let sum = temp + result[i+j+1];
            result[i+j+1] = sum%10;
            result[i+j] += Math.floor(sum/10);
        }
    }
    while(result.length>1 && result[0]===0){
        result.shift();
    }
    return result.join('');
};
