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
    if(!head || !head.next){
        return;
    }
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let pre = null;
    let curr = slow;
    
    while(curr){
       let next = curr.next;
        curr.next = pre;
       pre = curr;
        curr = next;
    }
    
    let first = head;
    let second = pre;
    
    while(second.next){
        let temp1 = first.next;
        let temp2 = second.next;
        
        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }
};