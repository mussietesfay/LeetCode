/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    
    // check for null 
    if(inorder.length === 0 || postorder.length === 0) return null;
    
    const rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);
    
    // finding the index of the rootval;
    
    const indexValue = inorder.indexOf(rootVal);
    
    // finding left and right in the inorder travese
    
    const leftInOrder = inorder.slice(0 , indexValue );
    const rightInOrder = inorder.slice(indexValue + 1);
    
     // finding left and right in the postorder travese
    
    const leftPostOrder = postorder.slice(0 , leftInOrder.length );
    const rightPostOrder = postorder.slice(leftInOrder.length  , postorder.length - 1);

    // recursion
root.left = buildTree(leftInOrder , leftPostOrder);
root.right= buildTree( rightInOrder , rightPostOrder);
    
    return root;
};