// https://leetcode.com/problems/invert-binary-tree/

// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // Recursive approach
    // Keep swapping the right child and the left child at every node level
    // Then, recursively do the same with the left child as a root and the right child as a root
    // Base case
    if(!root)   return root;
    // Start swapping left child with the right and right child with the left from the node above the root
    let left = root.left;
    root.left = root.right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
