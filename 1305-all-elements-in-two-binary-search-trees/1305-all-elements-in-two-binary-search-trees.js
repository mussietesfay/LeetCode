/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
     
    let array1 = InOrder(root1);
    let array2 = InOrder(root2);
    
    function merge(array1 , array2){
    let combine = [];
   let i=0;
   let j=0;

   while(i < array1.length && j < array2.length){
    if(array1[i] < array2[j]){
       combine.push(array1[i]);
       i++ 
    }else{
        combine.push(array2[j]);
        j++
    }
   }

   while(i < array1.length){
    combine.push(array1[i]);
    i++;
   }
   while(j < array2.length){
    combine.push(array2[j]);
    j++;
   }
   return combine;
 };
    return merge(array1 , array2);
};

function InOrder(root){
    let result = [];
    
    function traverse(node){
        if(!node) return null;
        
        if(node.left)  traverse(node.left);
        
        result.push(node.val);
        
        if(node.right)  traverse(node.right);
        
    }
     traverse(root);
    return result;
};