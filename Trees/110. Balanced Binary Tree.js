// https://leetcode.com/problems/balanced-binary-tree/

// 110. Balanced Binary Tree

// Given a binary tree, determine if it is height-balanced.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    /** Recursively check balance by comparing the height of left and right subtrees at each node.
    For every node, compute left and right heights using a separate height function.
    Then make recursive calls to check if both subtrees are balanced.*/
    if(!root)   return true;
    let lheight = height(root.left);
    let rheight = height(root.right);
    if(Math.abs(lheight-rheight)<=1){
        if(isBalanced(root.left) && isBalanced(root.right))
            return true;
        else
            return false;
    }
    else    return false;
};

const height = (root)=>{
    if(!root)   return 0;
    return 1+Math.max(height(root.left), height(root.right));
}
