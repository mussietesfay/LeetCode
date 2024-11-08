/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // if both are null
    if(!p && !q) return true;
    
    // if one is null
    
    if(!p || !q) return false;
    
    //check for both value
    
    if(p.val !== q.val){
        return false;
    }
    return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)
};