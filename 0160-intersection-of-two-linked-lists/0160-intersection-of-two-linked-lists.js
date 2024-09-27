/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    if(!headA || !headB) return null;
    
    let listA = headA;
    let listB = headB;
    let lengthA = 0;
    let lengthB = 0;
    
    while(listA){
      lengthA++;
        listA = listA.next;
    }
     while(listB){
      lengthB++;
      listB = listB.next;
    }
    listA = headA;
    listB = headB;
    
    if(lengthA > lengthB){
       for(let i=0; i < lengthA - lengthB ; i++ ){
           listA =  listA.next;            
       } 
    }else{
       for(let i=0; i < lengthB -lengthA ; i++ ){
           listB =  listB.next;            
       }  
    }
    
    while( listA !==  listB){
         listA =  listA.next;
         listB =  listB.next;
    }
    
    return  listB;
};