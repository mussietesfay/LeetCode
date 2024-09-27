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
    
    let dummy = new ListNode(0);
    let pre = dummy;
    
    while(list1 && list2){
        if(list1.val < list2.val){
            pre.next = list1;
            list1 = list1.next;
        }else{
           pre.next = list2;
            list2 = list2.next; 
        }
        pre = pre.next;
    }
    
    if(list1){
        pre.next = list1;
    }else{
      pre.next = list2;  
    }
    
    return dummy.next;
};