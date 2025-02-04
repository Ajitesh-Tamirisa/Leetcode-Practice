// https://leetcode.com/problems/spiral-matrix/

// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // once visited, update the value of cell to infinity
    // Move along the boundaries - first row, last col, last row, first col
    // And then gradually move in by 1
    // Change direction when you hit a boundary
    let result = [], rows = matrix.length; cols = matrix[0].length;
    let i=0, j=0;
    // Maintain boundaries and keep updating them as you move forward
    let top = 0, right = cols-1, bottom = rows-1, left = 0;
    while(top<=bottom && left<=right){
        // Traverse from left to right on current top row
        for(let i=left; i<=right; i++)  result.push(matrix[top][i]);
        top++;

        // Traverse from top to bottom of current right col
        for(let i=top; i<=bottom; i++)  result.push(matrix[i][right]);
        right--;

        // Traverse from right to left of current bottom row
        if(top<=bottom){
            for(let i=right; i>=left; i--)  result.push(matrix[bottom][i]);
            bottom--;
        }

        // Traverse from bottom to top of current left row
        if(left<=right){
            for(let i=bottom; i>=top; i--)  result.push(matrix[i][left]);
            left++;
        }
    }
    return result;
};
