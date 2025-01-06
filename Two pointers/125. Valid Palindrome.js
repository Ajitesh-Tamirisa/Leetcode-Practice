// https://leetcode.com/problems/valid-palindrome/

// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Without using regex
    // Function can be replaced with inline conditions to reduce overhead of function call
    // Using this function instead of inline conditions to make code more readable
    let isAlphaNumeric = (char)=>{
        let code = char.charCodeAt(0);
        return((code>=97 && code<=122) || (code>=48 && code<=57));
    }
    let p1 = 0, p2 = s.length-1;
    while(p1<p2){
        let p1Char = s[p1].toLowerCase(), p2Char = s[p2].toLowerCase();
        if(!isAlphaNumeric(p1Char)){
            p1++;
            continue;
        }
        if(!isAlphaNumeric(p2Char)){
            p2--;
            continue;
        }
        if(p1Char !== p2Char)   return false;
        p1++; p2--;
    }
    return true;
};
