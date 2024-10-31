/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    
    function BST(Array){
        if(Array.length === 0) return null;
        
        let mid = Math.floor ((Array.length)/2);
        let root = new TreeNode(Array[mid])
        
        root.left = BST(Array.slice(0 , mid));
        
        root.right = BST(Array.slice(mid + 1));
         return root;
    }
    
   return  BST(nums);
   
};