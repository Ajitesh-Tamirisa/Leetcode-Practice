// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:
// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Preorder is Root, Left, Right; Inorder is Left, Root, Right
    // Consider the case of root node for the tree. The first element of the preorder traversal is the root of the tree. Set this as root and remove it from the preorder.
    // Find the index of the this particular root node in the inorder traversal
    // Everything to the left of this index in inorder is in the left sub tree of the root
    // Everything to the right of this index in inorder is in the right sub tree of the root
    // In the preorder, 0 to index elements belong to the left subtree and the rest to the right subtree
    // Recursively call this function by sending the relevant sliced version of preorder and inorder while assigning them to root.left and root.right
  
    // Handle base case
    if(!preorder.length || !inorder.length)   return null;
    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal, null, null);
    let rootIndex = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex+1));
    return root;
};
