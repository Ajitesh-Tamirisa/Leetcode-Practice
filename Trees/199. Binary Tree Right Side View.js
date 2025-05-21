// https://leetcode.com/problems/binary-tree-right-side-view/

// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
// Input: root = [1,2,3,4,null,null,null,5]
// Output: [1,3,4,5]

// Example 3:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 4:
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    /** Perform a level-order traversal using a queue.
        For each level, track nodes left to right and record the last node (rightmost) of that level.
        Avoid storing the entire level — only keep the node needed for the right side view.
        This maintains O(n) time while reducing space overhead compared to collecting full levels.*/
    if(!root)   return [];
    let q = [root], result=[];
    while(q.length>0){
        let len = q.length;
        for(let i=0; i<len; i++){
            let node = q.shift();
            if(i===len-1)   result.push(node.val);
            if(node.left)   q.push(node.left);
            if(node.right)  q.push(node.right);
        }
    }
    return result;
};
