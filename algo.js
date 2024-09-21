// 21. Merge Two Sorted Lists



// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Base cases: if one list is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;

    // Recursive comparison of list nodes
    if (list1.val < list2.val) {
        // list1 node is smaller, so it should be part of the result
        list1.next = mergeTwoLists(list1.next, list2); // Recur with next of list1
        return list1;
    } else {
        // list2 node is smaller, so it should be part of the result
        list2.next = mergeTwoLists(list1, list2.next); // Recur with next of list2
        return list2;
    }
};