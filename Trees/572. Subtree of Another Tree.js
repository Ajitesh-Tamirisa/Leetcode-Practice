// https://leetcode.com/problems/subtree-of-another-tree/

// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root && subRoot)   return false;
    if(isSameTree(root, subRoot))   return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = (p, q) => {
    if(!p && !q)    return true;
    if(!p || !q)    return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
