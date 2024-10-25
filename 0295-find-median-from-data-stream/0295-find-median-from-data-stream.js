
class MedianFinder {
    constructor() {
        this.min = new MinHeap(); // Upper half
        this.max = new MaxHeap(); // Lower half
    }

    addNum(num) {
        // Add to Max-Heap first
        this.max.insert(num);
         this.min.insert(this.max.remove());
        // Balance the heaps
        if (this.max.size() < this.min.size()) {
            this.max.insert(this.min.remove());
        }

    }

    findMedian() {
        if (this.max.size() > this.min.size()) {
            return parseFloat(this.max.peak()); // Return with 5 decimal places
        } else {
            return parseFloat(((this.max.peak() + this.min.peak()) / 2)); // Average with 5 decimal places
        }
    }
}

class MaxHeap {
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
        while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
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
        const currentNode = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);
        return currentNode;
    }

    #sinkDown(index) {
        let currentIndex = index;
        const size = this.#heap.length;
        while (true) {
            let leftIndex = this.#left(currentIndex);
            let rightIndex = this.#right(currentIndex);
            let largestIndex = currentIndex;

            if (leftIndex < size && this.#heap[leftIndex] > this.#heap[largestIndex]) {
                largestIndex = leftIndex;
            }
            if (rightIndex < size && this.#heap[rightIndex] > this.#heap[largestIndex]) {
                largestIndex = rightIndex;
            }
            if (largestIndex !== currentIndex) {
                this.#swap(largestIndex, currentIndex);
                currentIndex = largestIndex;
            } else {
                return;
            }
        }
    }
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
        while (current > 0 && this.#heap[current] < this.#heap[this.#parent(current)]) {
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
        const currentNode = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);
        return currentNode;
    }

    #sinkDown(index) {
        let currentIndex = index;
        const size = this.#heap.length;
        while (true) {
            let leftIndex = this.#left(currentIndex);
            let rightIndex = this.#right(currentIndex);
            let smallestIndex = currentIndex;

            if (leftIndex < size && this.#heap[leftIndex] < this.#heap[smallestIndex]) {
                smallestIndex = leftIndex;
            }
            if (rightIndex < size && this.#heap[rightIndex] < this.#heap[smallestIndex]) {
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

