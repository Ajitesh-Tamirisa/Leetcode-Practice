// https://leetcode.com/problems/rotate-image/

// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. 

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // nxn matrix i.e. square matrix
    // When rotated by 90 deg, rows will become columns and columns will become rows but,
    // 1st row will be the last column
    // 2nd row will be the second last column and so on
    // last row will be the first column
    // How to do this transformation in place?
    // Swap matrix[i][j] with matrix[j][i] to convert rows to columns
    // Then reverse the rows to get the result
    let rows = matrix.length, cols = matrix[0].length;
    for(let i=0; i<rows; i++){
        // j=i+1 to avoid redundant swaps
        for(let j=i+1; j<cols; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let row of matrix){
        row.reverse();
    }
};
