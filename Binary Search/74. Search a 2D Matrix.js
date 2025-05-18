// https://leetcode.com/problems/search-a-2d-matrix/

// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:
//   Each row is sorted in non-decreasing order.
//   The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let len = matrix.length, targetRow = -1;
    let start = 0, end = len-1;
    // Binary search to find row
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let rowLen = matrix[mid].length;
        let low = matrix[mid][0], high = matrix[mid][rowLen-1];
        if(target>=low && target<=high){
            targetRow = mid;
            break;
        }
        if(target<low)  end = mid-1;
        else    start = mid+1;
    }
    // Binary search to find if target is present in the tragetRow
    if(targetRow!=-1){
        rowLen = matrix[targetRow].length;
        start = 0, end = rowLen-1;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            let curr = matrix[targetRow][mid]
            if(curr===target) return true;
            if(curr>target) end = mid-1;
            else    start = mid+1;
        }
    }
    return false;
};
