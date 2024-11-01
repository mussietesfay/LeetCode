/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let queue = [];
    
    if(root) queue.push(root);
    
    while(queue.length){
        let current = [];
        let size = queue.length;
        
        for(let i=0; i<size; i++){
            let node = queue.shift();
            current.push(node.val);
            
            for(const nodes of node.children ){
                queue.push(nodes);
            }
        }
        
        result.push(current);
    }
    return result;
};