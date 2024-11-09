/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    // base case check if boh are zero length
    
    if(preorder.length === 0 || inorder.length === 0) return null;
    
    //the root of the tree is in rhe first index of the preorder
    
    const firstValue = preorder[0];
    
    const root = new TreeNode(firstValue)
    
    const indexValue = inorder.indexOf(firstValue);
    
    
    // inorder left and right
    
    const leftInOrder = inorder.slice(0 , indexValue);
    const rightInOrder = inorder.slice(indexValue + 1);
    
    // preorder left and right
    
    const leftPreOrder = preorder.slice(1 , leftInOrder.length + 1 );
    const rightPreOrder = preorder.slice(leftInOrder.length + 1 );
    
    // recursion for left and right
    
    root.left = buildTree(leftPreOrder , leftInOrder );
    root.right = buildTree(rightPreOrder , rightInOrder );
    
    return root;
};