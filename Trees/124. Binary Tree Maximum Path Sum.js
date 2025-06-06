// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// 124. Binary Tree Maximum Path Sum

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 
// Constraints:
// The number of nodes in the tree is in the range [1, 3 * 104].
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
 * @return {number}
 */
var maxPathSum = function(root) {
    // DFS Traversal
    // At each node, calculate the best non-negative sum path from the left and right subtrees
    // Ignore negative sums as they reduce the overall path sum

    // Two choices at each node:
    // 1. No Splitting (Continue an existing path)
    //    - The node can extend a previous path by choosing only one subtree
    //    - Sum = root.val + max(maxsum(root.left), maxsum(root.right))
    //    - This value is returned to the parent, since a valid path cannot fork both ways

    // 2. Splitting (Start a new path)
    //    - The node starts a new path including both children
    //    - Sum = root.val + maxsum(root.left) + maxsum(root.right)
    //    - This is a potential maximum but is not returned (it’s only used to update the global max)

    // Update the global max with the best sum seen so far
    // Return the best single-path sum (no-split case) to the parent

    let res = root.val;
    const dfs = (root)=>{
        if(!root)   return 0;
        let leftSum = Math.max(dfs(root.left), 0);
        let rightSum = Math.max(dfs(root.right), 0);
        let split = root.val + leftSum + rightSum;
        let nosplit = root.val + Math.max(leftSum, rightSum);
        res = Math.max(res, split, nosplit);
        return nosplit;
    }
    dfs(root);
    return res;
};
