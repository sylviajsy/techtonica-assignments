/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryover = 0;
    let current1 = l1;
    let current2 = l2;
    let result = new ListNode();
    let currentResult = result;
    // while loop until one of the link list is undefined
    while (current1 !== null || current2 !== null || carryover != 0){
        let x = current1 !== null ? current1.val:0;
        let y = current2 !== null ? current2.val:0;
        let sum = x + y + carryover;

        carryover = Math.floor(sum/10);

        currentResult.next = new ListNode(sum%10);
        currentResult = currentResult.next;

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }
    return result.next
};