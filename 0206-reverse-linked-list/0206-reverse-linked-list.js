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
var reverseList = function(head, prev=null) {
    // let temp=head;
    // while(temp){
    //    let next=temp.next;
    //     temp.next=prev;
    //     prev=temp;
    //     temp=next;
    // }
    // return prev;
    if(!head) return prev;
    let temp=head;
    let next=temp.next;
    temp.next=prev;
    return reverseList(next,temp);
};