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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(current = root, key) {
    
    if(current === null) return null;
    
    if(key < current.val){
        current.left = deleteNode(current.left , key);
    }else if (key > current.val){
        current.right = deleteNode(current.right , key);
    }else{
        if(current.left === null && current.right === null){
            return null;
        }else if(current.left === null){
            return current.right;
        }else if (current.right === null){
            return current.left;
        }else {
            let subTree = miniValue (current.right);
            current.val = subTree;
            current.right = deleteNode(current.right , subTree)
        }
    }
    return current;
};
 function miniValue (current){
     
     while(current.left){
         current = current.left;
     }
     return current.val;
 };