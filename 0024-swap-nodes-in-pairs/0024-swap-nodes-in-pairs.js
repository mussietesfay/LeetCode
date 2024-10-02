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
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let point = dummy;
    
    while(point.next && point.next.next){
        let swap1 = point.next;
        let swap2 = point.next.next;
        
        swap1.next = swap2.next;
        swap2.next = swap1;
        point.next = swap2;
        point = swap1;
    }
    return dummy.next;;
};