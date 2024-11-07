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
 * @return {number}
 */
var maxDepth = function(root) {
    
    function postOrder(node){
        if(!node) return 0;
        
        const left = postOrder(node.left);
        const right = postOrder(node.right);
        
        return Math.max(left , right) + 1;
        
    }
    
    return postOrder(root)
};