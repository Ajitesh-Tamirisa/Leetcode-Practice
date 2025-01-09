// https://leetcode.com/problems/reverse-linked-list/

// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative Approach
var reverseList = function(head) {
    // Break the current links and reverse them
    // To keep track of you current order, use variable like prev, next and curr before updating the links
    let curr = head, prev = null, next = null;
    while(curr!=null){
        // Keep track of what would come next in the current order
        // This will help us to move forward as we update the links
        next = curr.next;
        // Update the link to reverse it
        curr.next = prev;
        // Move the curr and prev variables
        prev = curr;
        curr = next;
    }
    // loop ends when curr points to null and prev points to the first element of the reversed list
    return prev;
};

// Recursive Approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Recursive approach
    const reverse = (curr,prev) => {
        if(curr){
            next=curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            return reverse(curr, prev);
        }
        else    return prev;
    }
    return reverse(head, null);
};
