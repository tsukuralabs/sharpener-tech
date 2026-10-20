/**
 ** Time Complexity
 * Insertion - O(1)
 * Removing - O(n)
 *  
 * (Process):
 * * Insertion [beginning] & Removing [end] -> O(n).
 * ? To make the above process O(1) we use circula array implementation.
 * 
 * ? Enqueue -> O(1) [insert at end of array].
 * ? Dequeue -> O(n) [removing beginning from the array].
 * 
 * ? Find Rear element
 * ? const rear = front + size - 1;
 * 
 * */ 

 // 9814130538

class Queue{
    constructor(queue){
        this.queue = queue
        this.minpos = 0;
        this.maxpos = queue.length - 1
    }

    pushIntoQueue(value){
        // Complete this function 
        // Push the value into the queue
        this.queue.enqueue(value);
    }

    popFromQueue(){
        // Complete this function
        //return the elements based on FIFO logic
        //When no elements remain to return , return -1
        if (this.queue.length === 0) {
            return -1;
        }
        return this.queue.dequeue();
    }
}