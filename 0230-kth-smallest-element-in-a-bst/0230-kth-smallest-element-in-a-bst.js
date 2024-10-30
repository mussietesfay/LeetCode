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
    let result = [];
     
    function InOrder (currentNode){
    
      if(currentNode.left) InOrder(currentNode.left) 
        result.push(currentNode.val)
     if(currentNode.right) InOrder(currentNode.right) 
    
}
    InOrder(root);
    
    return result[k-1];
};

