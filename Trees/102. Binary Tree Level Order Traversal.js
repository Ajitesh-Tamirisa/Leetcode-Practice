// https://leetcode.com/problems/binary-tree-level-order-traversal/

// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    // BFS - QUEUE    
    // Use the size of the queue to detrmine the length of the current level
    // Maintain an array to store elements of current level
    // Iterate the queue for 'size' number of times and process their nodes by adding their children to the queue
    // After the entire level is processed, add the 'level' array to list
    if(!root) return [];
    let result = [], q = [root];
    while(q.length>0){
        let size = q.length, level = [];
        for(let i=0; i<size; i++){
            let pop = q.shift();
            level.push(pop.val);
            if(pop.left)    q.push(pop.left);
            if(pop.right)   q.push(pop.right);
        }
        result.push(level);
    }
    return result;    
    // q.shift() call can be replaced (which has 𝑂(𝑘) complexity, where 𝑘 is the size of the queue) with a pointer-based approach using a left index for better theoretical performance
};
