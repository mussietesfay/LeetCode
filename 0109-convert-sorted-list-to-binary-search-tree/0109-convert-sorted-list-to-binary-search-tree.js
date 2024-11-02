/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;

    function convertBST(head2) {
       
        if (!head2) return null;

        let mid = middleNode(head2); 

        let root = new TreeNode(mid.val); 

        
        if (head2 === mid) return root;

        
        root.left = convertBST(head2); 
        root.right = convertBST(mid.next); 

        return root;
    }

    return convertBST(head);
};

function middleNode(head1) {
    if (!head1) return null;

    let slow = head1;
    let fast = head1;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;            
        slow = slow.next;      
        fast = fast.next.next; 
    }

    
    if (prev) {
        prev.next = null;
    }

    return slow; 
}