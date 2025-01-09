// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 
// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Travel to the nth node from the beginning of the list - pointer p1
    // Start a new pointer - p2 - at the beginning of the list. Move p1 and p2 to next node iteratively
    // By the time p1 reaches the final node, p2 would reach the nth node from the end of list
    // Figure out how to delete it. To delete it we might need to keep track of the prev for p1
    let p1 = head, p2 = head, prev = null;
    for(let i=1; i<=n && p1; i++){
        p1 = p1.next;
    }
    while(p1){
        p1 = p1.next;
        prev = p2;
        console.log(prev);
        p2 = p2.next;
    }
    // When p2 reaches the nth node from the end, prev will point to the node before p2.
    // If n is equal to the length of the list, prev will remain null. To handle this special case remove the head node.
    if(!prev)   return head.next;
    prev.next = prev.next ? prev.next.next : null;
    return head;
};
