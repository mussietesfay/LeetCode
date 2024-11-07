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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = [];
    let queue = [];
    
    if(root) queue.push(root);
    
    while(queue.length){
        let size = queue.length;
        let levelSum = 0;
        
        for(let i=0; i<size; i++){
            let node = queue.shift();
            
            levelSum += node.val;
            
            if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
        }
        result.push(levelSum/size);
    }
    return result;
};