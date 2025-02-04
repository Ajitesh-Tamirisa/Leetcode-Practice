// https://leetcode.com/problems/pacific-atlantic-water-flow/

// 417. Pacific Atlantic Water Flow

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:
// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean 
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean 
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean 
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
  
// Example 2:
// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

// Constraints:
// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 105


/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    // Cells in the first row and first column can reach the Pacific Ocean.
    // Cells in the last row and last column can reach the Atlantic Ocean.
    // Use BFS starting from these edge cells to mark where water can flow.
    // Maintain two visited matrices to track reachable cells for each ocean.
    // After BFS, collect the cells that can flow to both oceans and return them.
    let [rows, cols] = [heights.length, heights[0].length];
    let pacific = Array(rows).fill().map(() => Array(cols).fill(false));
    let atlantic = Array(rows).fill().map(() => Array(cols).fill(false));
    let pqueue = [], aqueue = [];
    // Push the known cells on the edges into their appropriate queue so that they can be explored
    for(let i=0; i<cols; i++){
        pqueue.push([0, i]);
        aqueue.push([rows-1, i]);
    }
    for(let i=0; i<rows; i++){
        pqueue.push([i, 0]);
        aqueue.push([i, cols-1]);
    }
    // BFS should explore neighbors of each cell of the queue and mark them as T or F in the visited matrix
    const bfs = (queue, visited) => {
        while(queue.length>0){
            let [row, col] = queue.shift();
            visited[row][col] = true;
            let dir = [[-1,0], [0,1], [1,0], [0,-1]];
            dir.forEach(([r,c]) => {
                let newRow = row+r, newCol = col+c;
                if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols 
                    && !visited[newRow][newCol] && heights[newRow][newCol]>=heights[row][col])
                        queue.push([newRow, newCol]);
            });
        }
    }
    bfs(pqueue, pacific);
    bfs(aqueue, atlantic);
    // Create a result and populate it based on the data we have
    let result = [];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(pacific[i][j] && atlantic[i][j])
                result.push([i,j]);
        }
    }
    return result;
};
