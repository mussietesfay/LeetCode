/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0);
    let curr = dummy;
    dummy.next = head;
    
    for(let i = 0; i<left-1; i++){
        curr = curr.next;
    }
    
    let leftpre = curr;
    curr = curr.next;
    let tail = curr;
    
    let prev = null;
    
    for(let i = 0; i < right - left + 1 ; i++){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    leftpre.next = prev;
    tail.next = curr;
    
    return dummy.next;
};