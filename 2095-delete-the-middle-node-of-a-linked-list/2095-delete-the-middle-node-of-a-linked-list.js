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
var deleteMiddle = function(head) {
      
    if(!head || !head.next){
        return null;
    }

   
    let slow = head;
    let fast = head;
    let pre = null;
    
    while(fast && fast.next){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(pre){
    pre.next = slow.next;
    }
    
    return head;
};