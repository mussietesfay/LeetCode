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
var findBottomLeftValue = function(root) {
    let  queue = [];
    let bottomLeft;
    if(root) queue.push(root);
    
    while(queue.length){
        let size = queue.length;
        
        for(let i=0; i<size; i++){
            let node = queue.shift();
            
            if(i === 0){
               bottomLeft = node.val; 
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return bottomLeft;
};