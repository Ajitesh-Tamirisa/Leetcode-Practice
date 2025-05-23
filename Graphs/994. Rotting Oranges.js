// https://leetcode.com/problems/rotting-oranges/

// 994. Rotting Oranges

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    /**
    * Perform multi-source BFS to simulate rotting of fresh oranges over time.
    * Start by adding all initially rotten oranges to a queue.
    * Each round of BFS represents 1 minute — process all current rotten oranges,
    * and rot any fresh ones adjacent to them, adding newly rotten ones to the queue.
    * Continue until all reachable fresh oranges are rotted; return minutes taken,
    * or -1 if some fresh oranges can't be reached.
    */

    let directions = [[0,1],[1,0],[-1,0],[0,-1]];
    let rows = grid.length, cols = grid[0].length, minutes=0, count=0;
    let [fresh, rotten, queue] = getCount(grid, rows, cols);
    if(fresh===0)   return minutes;
    while(queue.length>0){
        let len = queue.length;
        let rotted = false;
        while(len>0){
            let [row,col] = queue.shift();
            for(let [r,c] of directions){
                let newRow = row+r, newCol = col+c;
                if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && grid[newRow][newCol]===1){
                    grid[newRow][newCol]=2;
                    fresh--; rotten++;
                    queue.push([newRow, newCol]);
                    rotted=true;
                }
            }
            len--;
        }
        if(rotted)  minutes++;
    }
    return fresh===0 ? minutes: -1;
};

var getCount = function (grid, rows, cols){
    let rotten=0, fresh=0, queue=[];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === 1)    fresh++;
            else if(grid[i][j]===2){
                rotten++;
                queue.push([i,j]);
            }
        }
    }
    return [fresh, rotten, queue];
}
