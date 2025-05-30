// https://leetcode.com/problems/diameter-of-binary-tree/

// 543. Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

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
var diameterOfBinaryTree = function(root) {
    /** Use depth-first search (DFS) to compute the height of each subtree.
    At each node, update the diameter as the sum of the heights of its left and right subtrees.
    Return the maximum diameter found during traversal.**/
    let diameter = 0;
    const dfs = (root)=>{
        if(!root)   return 0;
        let leftHeight = dfs(root.left);
        let rightHeight = dfs(root.right);
        diameter = Math.max((leftHeight+rightHeight), diameter);
        return 1+Math.max(leftHeight,rightHeight);
    }
    dfs(root);
    return diameter;
};
