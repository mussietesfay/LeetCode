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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(temp = root, val) {
    if(temp === null) return new TreeNode(val);
    
    if(val < temp.val){
        temp.left = insertIntoBST(temp.left , val);
    }else if(val > temp.val){
        temp.right = insertIntoBST(temp.right , val)
    }
    
    return temp;
};
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class  insertIntoBST{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//      const newNode = new Node(value);
//      if(this.root === null ){
//         this.root = newNode;
//         return this;
//      }  
     
//      let temp = this.root;

//      while(true){
//         if(newNode.value === temp.value) return undefined;

//         if(newNode.value < temp.value){
//             if(temp.left === null){
//                 temp.left = newNode;
//                 return this;
//             }
//             temp = temp.left;
//         }else{
//             if(temp.right === null){
//                 temp.right = newNode;
//                 return this;
//             }
//             temp = temp.right;
//         }
//      }
//     }
// };