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
l1 = reverse(l1);
l2 = reverse(l2);
    
    let result = new ListNode(0);
    let pre = result;
    let carry = 0;
    
    while(l1 || l2){
        
        let sum = carry;
        
        if(l1){
            sum += l1.val
            l1 = l1.next;
        }
        
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        pre.next = new ListNode(sum);
        pre = pre.next;
    }
    if(carry > 0){
        pre.next = new ListNode(carry)
    }
    
    return reverse(result.next)  ;
};

function reverse(head){
        let curr = head;
        let  prev = null;
        
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            
        }
        return prev;
    }