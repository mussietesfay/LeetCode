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

function sortList(head) {
    if (!head || !head.next) return head;

    
    let middle = mid(head);

   
    let left = sortList(head);
    let right = sortList(middle);

   
    return mergeSorted(left, right);
}

function mid(head) {
    let slow = head;
    let fast = head.next;

    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    
    let temp = slow.next; 
    slow.next = null;     
    return temp;          
}

function mergeSorted(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let dummy = new ListNode(0); 
    let prev = dummy; 

    // Merge the two lists
    while (list1 && list2) {
        if (list1.val < list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next; 
    }

    
    if (list1) {
        prev.next = list1;
    }
    if (list2) {
        prev.next = list2;
    }

    return dummy.next; 
}
    