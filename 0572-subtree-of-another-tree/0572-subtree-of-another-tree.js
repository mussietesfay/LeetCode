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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    // if subRoot is null  its true
    if(!subRoot) return true;
    
    // if root is null its faslse
    
    if(!root) return false;
    
    // check if it is subset or not 
    
    if(isSameTree(root ,subRoot)) return true;
    
    
    // check recursion for left and right child
    
    return isSubtree(root.left , subRoot) || isSubtree(root.right , subRoot)
};

const isSameTree = (p , q)=>{
    // if both are null
    if(!p && !q) return true;
    
    // check if one is null and also if value is not the same
    
    if(!p || !q || p.val !== q.val) return false;
    
    // recursion for both left and right
    return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)
}