/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let minheap = new MinHeap();
    
    for(let i = 0; i< Math.min(n , k); i++){
        minheap.insert({value:matrix[i][0] , row:i, col:0})
    }
    
    let Kth = null;
    
    for(let i=0; i<k; i++){
        const {value , row ,col} = minheap.remove();
        
        Kth = value;
        
        
        if(col + 1 < n){
         minheap.insert({value:matrix[row][col + 1] , row:row, col:col + 1})   
        }
    }
    return Kth;
};

class MinHeap{
    #heap=[];

   getHeap(){
    return [...this.#heap]
   } 
   #left(index){
    return 2*index + 1;
   }
   #rigth(index){
    return 2*index + 2;
   }
   #parent(index){
    return Math.floor((index - 1)/2);
   }
   #swap(index1 , index2){
    [this.#heap[index1] , this.#heap[index2]]=[this.#heap[index2] , this.#heap[index1]];
   }
   peak(){
    return this.#heap[0];
   }
   size(){
    return this.#heap.length;
   }

   insert(value){
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while(current > 0 && this.#heap[current].value < this.#heap[this.#parent(current)].value){
       this.#swap(current , this.#parent(current)) ;
       current = this.#parent(current);
    }
   }
    remove(){
     if(this.#heap.length === 0){
        return null;
     }  
     if(this.#heap.length === 1){
        return this.#heap.pop();
     } 
     let currentNode=this.#heap[0];
     this.#heap[0] =this.#heap.pop();
      this.#sinkDown(0)
      return currentNode;
    }

    #sinkDown(index){
   let currentIdex = index;
   let size = this.#heap.length;
   while(true){
    let leftIndex = this.#left(index);
    let rigthIndex = this.#rigth(index);

    if(leftIndex < size && this.#heap[leftIndex].value < this.#heap[currentIdex].value){
        currentIdex = leftIndex;
    }
    if(rigthIndex < size && this.#heap[rigthIndex].value < this.#heap[currentIdex].value){
        currentIdex = rigthIndex;
    }
    if(currentIdex != index){
        this.#swap(currentIdex , index);
        index = currentIdex;
    }else{
        return;
    }
   }
    }
};