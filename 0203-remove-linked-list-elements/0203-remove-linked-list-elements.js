/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return null;
    
    let dummy = new ListNode(0);
    let pre = dummy;
    let curr = head;
    
    while(curr){
        if(curr.val === val){
            pre.next = curr.next;
        }else{
            pre.next = curr;
            pre = curr
        }
        curr = curr.next;
    }
    return dummy.next;
};