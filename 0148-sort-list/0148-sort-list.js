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


    const getMiddle = (head) => {
    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

  return slow;
}

const merge = (left, right) => {
    let dummy = new ListNode(0);
    let tail = dummy;

    while(left && right) {
        if(left.val < right.val) {
            tail.next = left;
            left = left.next;
        }else {
            tail.next = right;
            right = right.next;
        }

        tail = tail.next;
    }

    if(left) {
        tail.next = left;
    }

    if(right) {
        tail.next = right;
    }

    return dummy.next;
}

var sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    // Split in half
    let left = head;
    let right = getMiddle(head);
    let temp = right.next;
    right.next = null;
    right = temp;

    left = sortList(left);
    right = sortList(right);

    return merge(left, right);
};