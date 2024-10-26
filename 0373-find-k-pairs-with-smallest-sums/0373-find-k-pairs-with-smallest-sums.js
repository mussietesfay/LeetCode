/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    let minHeap = new MinHeap();
    
    for(let i = 0; i< Math.min(k , nums1.length); i++){
        minHeap.insert([nums1[i] , nums2[0] ,0])
    }
    while(k-- > 0 && minHeap.size() > 0){
        const [ num1 ,num2 , index2] = minHeap.remove();
        result.push([num1 , num2]);
        
        
        if(index2 + 1 < nums2.length){
           minHeap.insert([num1 , nums2[index2 + 1] , index2 + 1]) 
        }
        
    }
    return result;
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
    while(current > 0 && this.#heap[current][0] + this.#heap[current][1] < this.#heap[this.#parent(current)][0] + this.#heap[this.#parent(current)][1]){
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

    if(leftIndex < size && this.#heap[leftIndex][0] + this.#heap[leftIndex][1] < this.#heap[currentIdex][0] + this.#heap[currentIdex][1]){
        currentIdex = leftIndex;
    }
    if(rigthIndex < size && this.#heap[rigthIndex][0] + this.#heap[rigthIndex][1] < this.#heap[currentIdex][0] + this.#heap[currentIdex][1]){
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