/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let graph = Array.from({ length: n }, () => []);
    
    for (let [u, v, w] of times) {
        graph[u - 1].push({ node: v - 1, weight: w });
    }

    let distance = dijkstra(graph, k - 1);
    let min = Math.max(...distance); // Use max to find the longest delay

    return min === Infinity ? -1 : min;
};

function dijkstra(graph, k) {
    let n = graph.length;
    let distance = Array(n).fill(Infinity);
    let visited = Array(n).fill(false);
    let priorityQueue = new MinHeap();

    distance[k] = 0;
    priorityQueue.insert({ node: k, weight: 0 });

    while (priorityQueue.size() > 0) {
        let { node: currentNode, weight: currentWeight } = priorityQueue.remove(); 

        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        for (const nei of graph[currentNode]) {
            let currentDistance = distance[currentNode] + nei.weight;
            if (currentDistance < distance[nei.node]) {
                distance[nei.node] = currentDistance;
                priorityQueue.insert({ node: nei.node, weight: currentDistance });
            }
        }
    }
    return distance;
}

class MinHeap {
    #heap = [];

    getHeap() {
        return [...this.#heap];
    } 

    #left(index) {
        return 2 * index + 1;
    }

    #right(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    peak() {
        return this.#heap[0];
    }

    size() {
        return this.#heap.length;
    }

    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;
        while (current > 0 && this.#heap[current].weight < this.#heap[this.#parent(current)].weight) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    remove() {
        if (this.#heap.length === 0) {
            return null;
        }  
        if (this.#heap.length === 1) {
            return this.#heap.pop();
        } 
        let rootNode = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);
        return rootNode;
    }

    #sinkDown(index) {
        let currentIndex = index;
        let size = this.#heap.length;
        while (true) {
            let leftIndex = this.#left(currentIndex);
            let rightIndex = this.#right(currentIndex);
            let smallestIndex = currentIndex;

            if (leftIndex < size && this.#heap[leftIndex].weight < this.#heap[smallestIndex].weight) {
                smallestIndex = leftIndex;
            }
            if (rightIndex < size && this.#heap[rightIndex].weight < this.#heap[smallestIndex].weight) {
                smallestIndex = rightIndex;
            }
            if (smallestIndex !== currentIndex) {
                this.#swap(smallestIndex, currentIndex);
                currentIndex = smallestIndex;
            } else {
                return;
            }
        }
    }
}