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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first = null;
    let second = null;
    let prev = null;
    
    const inOrder = function(node){
        if(!node) return ;
        
        if(node.left)  inOrder(node.left);
        
        if(prev && prev.val > node.val){
            if(!first){
                first = prev
            }
            second = node;
        }
        prev = node;
        
        if(node.right) inOrder(node.right)
    }
    inOrder(root)
    
    if(first && second){
        [first.val , second.val] = [second.val , first.val]
    }
};