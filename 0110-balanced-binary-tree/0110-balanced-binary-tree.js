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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    const checkBalance = function (node){
    
        if(!node) return 0;
        
        const left = checkBalance(node.left);
        
        if(left === -1) return -1;
        
          const right = checkBalance(node.right);
        
        if(right === -1) return -1;
        
        if(Math.abs(left - right) > 1){
            return -1;
        }
        
        return Math.max(left , right) + 1;
    };
    
    return checkBalance(root) !== -1;
};