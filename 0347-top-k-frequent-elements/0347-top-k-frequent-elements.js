/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for(const num of nums){
        map.set(num , (map.get(num) || 0) + 1);
    }
    
    // creat a min heap 
    
    let min = new  minHeap();
    
    for(const [num , freq] of map.entries()){
       min.insert([freq , num]) ;
        
        // remove excceds k 
        
        if(min.size() > k){
            min.remove();
        }
    }
    
    let result = [];
    
    while(min.size() > 0){
        result.push(min.remove()[1]);
    }
    
    return result;
};

class minHeap{
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
    while(current > 0 && this.#heap[current][0] < this.#heap[this.#parent(current)][0]){
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

    if(leftIndex < size && this.#heap[leftIndex][0] < this.#heap[currentIdex][0]){
        currentIdex = leftIndex;
    }
    if(rigthIndex < size && this.#heap[rigthIndex][0] < this.#heap[currentIdex][0]){
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
}