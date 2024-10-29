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
var isValidBST = function(root) {
   
    function valide(node , low = -Infinity , high = Infinity){
        
        // base case check the root if its empty
        
        if(!node) return true;
        
        // chech the current va with the range of the define 
        
        if(node.val <= low || node.val >= high) return false;
        
        // recursion validation for left and right subtree
        
        return valide(node.left , low , node.val) && valide(node.right , node.val , high);
        
    }
    return valide(root);
};