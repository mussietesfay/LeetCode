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
    let fast = head;
    let slow = head;
    
    for(let i=0; i<n; i++){
        if(fast === null){
            return head;
        }
        fast = fast.next;
    }
    
    if(fast === null){
        return head.next;
    }
    
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    let next = slow.next;
    slow.next = next.next;
    next.next = null;
    
    return head;
};