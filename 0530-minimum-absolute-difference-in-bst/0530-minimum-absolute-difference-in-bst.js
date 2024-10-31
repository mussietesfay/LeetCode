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
var getMinimumDifference = function(root) {
    let minValue = Infinity;
    let prev = null;
    
    function Inorder(node){
        
        if(node.left) Inorder(node.left);
        
        if(prev !== null){
            let diff = Math.abs(node.val - prev);
            minValue = Math.min(diff , minValue);
        }
        prev = node.val;
        
        if(node.right) Inorder(node.right);
    }
    Inorder(root);
    return minValue;
};