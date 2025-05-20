// https://leetcode.com/problems/merge-k-sorted-lists/

// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Use a function to return the index of the list which has the next minimum number
    // After using that number from the list, move the head of the list to point to the next number in the list
    // Solution can be optimized from O(n*k) to O(n logk) by using a min heap
    // This function will loop through all current heads of all lists and return the index of the list with the next min
    const nextMinListIndex = (lists) => {
        let min = Number.MAX_SAFE_INTEGER;
        let index = -1;
        for(let i=0; i<lists.length; i++){
            if(lists[i] && lists[i].val < min){
                min = lists[i].val;
                index=i;
            }
        }
        return index;
    }

    let head = new ListNode();
    let curr = head;
    while(1){
        let minIndex = nextMinListIndex(lists);
        if(minIndex === -1) break;
        curr.next = lists[minIndex];
        curr = curr.next;
        lists[minIndex] = lists[minIndex].next;
    }
    return head.next;
};

// Using min heap - O(n log k)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let pq = new MinPriorityQueue(x => x.val);
    for(let list of lists){
        if(list)    pq.enqueue(list);
    }
    let head = new ListNode();
    let curr = head;
    while(pq.size()>0){
        let node = pq.dequeue();
        curr.next = node;
        curr = curr.next;
        node = node.next;
        if(node)    pq.enqueue(node);
    }
    return head.next;
};
