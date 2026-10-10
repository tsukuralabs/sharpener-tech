class Queue {
    constructor() {
        this.q = [];
        this.front = -1;
        this.rear = -1;
    }
    enqueue(ele) {
        // check queue is empty or not.
        if (this.front == -1) {
            this.front += 1;
            this.rear += 1;
        } else {
            this.rear += 1;
        }
        this.q[this.rear] = ele;
    }
}


obj = new Queue();
obj.enqueue(1);
obj.enqueue(5);
obj.enqueue(10);

console.log(obj.q);

