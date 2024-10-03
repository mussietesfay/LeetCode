/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let curr = slow;
    let pre = null;
    
    while(curr){
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    let p1 = head;
    let p2 = pre;
    
    while(p2){
        if(p1.val !== p2.val){
            return false;
        }else{
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    return true;
};