// https://leetcode.com/problems/reverse-nodes-in-k-group/

// 25. Reverse Nodes in k-Group

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // For each group of k nodes, reverse the group in-place.
    // After reversal, connect the previous group's tail to the new head,
    // and connect the new tail to the next group's head.
    // Repeat until fewer than k nodes are left.
    let counter = k, curr = head, prev = null, next=null;
    let dummy = new ListNode(0);
    let prevGroupEnd = dummy;
    while(true){
        let kthNode = getKthNode(curr, k);
        if(!kthNode)    break;
        let nextGroup = kthNode.next;
        prev = nextGroup;
        let node = curr;
        while(counter>0){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            counter--;
        }
        counter = k;
        // Connect previous group's tail to the new head of this group
        prevGroupEnd.next = kthNode;
        // Connect new tail (was curr before reversal) to the next group
        prevGroupEnd = curr;
        curr = nextGroup;
    }
    return dummy.next;
};

var getKthNode = function(start, k){
    while(start && k>1){
        start = start.next;
        k--;
    }
    return start;
}
