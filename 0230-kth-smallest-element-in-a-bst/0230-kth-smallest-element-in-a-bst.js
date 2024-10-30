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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = null;
    let count = 0;
     
    function InOrder (currentNode){
    
      if(currentNode.left) InOrder(currentNode.left) 
        count++
        
        if(count === k){
            result = currentNode.val;
            return;
        }
        
     if(currentNode.right) InOrder(currentNode.right) 
    
}
    InOrder(root);
    
    return result;
};

