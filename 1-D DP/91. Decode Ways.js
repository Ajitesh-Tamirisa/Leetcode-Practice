// https://leetcode.com/problems/decode-ways/

// 91. Decode Ways

// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

// "1" -> 'A'

// "2" -> 'B'

// ...

// "25" -> 'Y'

// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:
// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
// Note: there may be strings that are impossible to decode.
// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation:
// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation:
// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

// Constraints:
// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // dp[i] stores the number of ways to decode the substring starting at index i.
    // Start from the end of the string and for each index:
    // 1. If the current digit is valid (non-zero), add the ways from the next digit (dp[i+1]).
    // 2. If the current and next digit form a valid two-digit number (10 to 26), add the ways from the index after the next (dp[i+2]).

    // Edge case: empty string or string starting with '0'
    if (s.length === 0 || s[0] === '0') return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);  // dp[i] will store the number of ways to decode s[i:]

    dp[n] = 1;  // Base case: there's one way to decode an empty string
    // Iterate through the string from second to last index down to 0
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== '0') {
            dp[i] += dp[i + 1];  // Decode the current single digit (s[i])
            // This means there are as many ways to decode the string starting from index i as there are ways to decode the string starting from index i + 1.
        }
        if(i<n-1 && (s[i]==='1' || (s[i]==='2' && s[i+1]<'7'))){
            dp[i] += dp[i+2]; // decoding a two-character substring, s[i]s[i+1]
            // In this case, the number of ways to decode the string starting from i is also influenced by the number of ways to decode the substring starting at i + 2 (i.e., the substring after the two-digit number).
        }
    }
    return dp[0];
};
