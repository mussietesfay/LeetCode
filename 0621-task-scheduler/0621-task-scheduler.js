/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
    const frequency = Array(26).fill(0);
    
    
    for (const task of tasks) {
        frequency[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    const maxHeap = new MaxHeap();

    
    for (const freq of frequency) {
        if (freq > 0) {
            maxHeap.insert(freq);
        }
    }

    let intervals = 0;

    
    while (maxHeap.size() > 0) {
        const temp = [];
        let tasksToSchedule = Math.min(n + 1, maxHeap.size()); 

        for (let i = 0; i < tasksToSchedule; i++) {
            if (maxHeap.size() > 0) {
                temp.push(maxHeap.remove());
            }
        }

        
        intervals += temp.length;

        
        for (const freq of temp) {
            if (freq > 1) {
                maxHeap.insert(freq - 1); 
            }
        }

        
        if (maxHeap.size() > 0) {
            intervals += (n + 1 - temp.length); 
        }
    }

    return intervals;
    
};

class MaxHeap{
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
    while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]){
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

    if(leftIndex < size && this.#heap[leftIndex] > this.#heap[currentIdex]){
        currentIdex = leftIndex;
    }
    if(rigthIndex < size && this.#heap[rigthIndex] > this.#heap[currentIdex]){
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