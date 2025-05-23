// https://leetcode.com/problems/max-area-of-island/

// 695. Max Area of Island

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let rows = grid.length, cols = grid[0].length, visited=new Set(), result=0;
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            let area = 0;
            if(grid[i][j]===1 && !visited.has(`${i},${j}`)){
                let queue = [[i,j]];
                while(queue.length>0){
                    let [row, col] = queue.shift();
                    let str = `${row},${col}`;
                    if(grid[row][col]===1 && !visited.has(str)){
                        area++;
                        visited.add(str);
                        for(let [r,c] of directions){
                            let newRow = row+r, newCol = col+c;
                            if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && !visited.has(`${newRow},${newCol}`) && grid[newRow][newCol] === 1)
                                queue.push([newRow, newCol]);
                        }
                    }
                }
                result = Math.max(result, area);
            }
        }
    }
    return result;
};
