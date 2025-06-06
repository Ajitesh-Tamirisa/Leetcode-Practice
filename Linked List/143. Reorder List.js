// https://leetcode.com/problems/reorder-list/

// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 
// Constraints:
// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Traverse to the mid using fast and slow pointers. Slow pointer would be at the middle of the list
    // Reverse the second half
    // Start joining the reversed second half into the first half in the required order
    let mid = head, fast = head;
    while(fast && fast.next){
        mid = mid.next;
        fast = fast.next.next;
    }
    let reversedSecondHalf = reverse(mid);
    let reversedSecondHalfCurr = reversedSecondHalf;
    while(reversedSecondHalfCurr && reversedSecondHalfCurr.next){
        let next = head.next;
        head.next = reversedSecondHalfCurr;
        reversedSecondHalfCurr = reversedSecondHalfCurr.next;
        head.next.next = next;  
        head = head.next ? head.next.next : null;      
    }
};

const reverse = (head) => {
    let prev = null, curr=head, next=null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
