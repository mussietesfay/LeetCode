/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    
    if (root) stack.push(root);
    
    while (stack.length) {
        let node = stack.pop(); // Get the top node from the stack
        result.push(node.val);  // Visit the node
        
        // Push right child first so that left child is processed next
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return result;
};