// https://leetcode.com/problems/number-of-islands/

// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // BFS - Explore neighbors of each node with land
    // While exploring, if you encounter a neighbor with the value 1 and it was not previously visited then add it to the queue to be further explored
    // This will help us understand how big this island is and to not count it as a new island
    // Maintain a global count of number of islands

    let directions = [[-1,0], [0,1], [1,0], [0,-1]]
    let rows = grid.length, cols = grid[0].length;
    // Maintain a visited set to ensure you don't explore a node that was already explored
    let visited = new Set();
    let numIslands = 0;
    if(rows==0 || cols===0) return 0;
    // Queue will consist of arrays with each array being a row, col pair to be explored next
    const bfs = (i, j) => {
        let queue = [[i, j]];
        visited.add(i+","+j);
        while(queue.length>0){
            let [row, col] = queue.shift();
            // Explore neighbors
            for(let i=0; i<4; i++){
                let newRow = row+directions[i][0], newCol = col+directions[i][1];
                if(newRow<rows && newRow>=0 && newCol<cols && newCol>=0
                    && !visited.has(newRow+","+newCol) && grid[newRow][newCol]==="1"){
                        queue.push([newRow, newCol]);
                        visited.add(newRow+","+newCol);
                    }
            }
        }
    }

    // Call BFS
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            // If this particular node has not been visited yet and has a value of 1(land), explore it
            if(!visited.has(i+","+j) && grid[i][j]==="1"){
                bfs(i,j);
                numIslands++;
            }
        }
    }
    return numIslands;
    // Optimized Approach: Instead of using a Set, we can mark visited cells directly in the grid by changing "1" (land) to "0" (water).
};
