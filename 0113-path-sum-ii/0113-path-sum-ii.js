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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    let result = [];
    
    const dfs = (node , path , sum )=>{
        if(!node) return;
        
        path.push(node.val);
        sum += node.val;
        
        if(!node.left && !node.right && sum === targetSum ){
            result.push([...path]);
        }else{
            dfs(node.left , path , sum);
            dfs(node.right , path , sum);
        }
        // backtracking 
        path.pop();
    }
    dfs(root , [] , 0)
    return result;
};