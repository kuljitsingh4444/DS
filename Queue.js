class TechQ{
    constructor(size){
        this.size = size
        this.front = 0;
        this.rear = 0;
        this.items= Array(size).fill(null)
    }
    
    printQueue(){
        console.log(this.items)
        console.log("Front:" + this.front)
        console.log("Rear:" + this.rear)
    }
    
    enque(newItem){
        if(this.rear < this.size){
            this.items[this.rear] = newItem
            this.rear += 1;
        } else {
            console.log("Overflow!")
        }
    }
    
    deque(){
        if(this.front === this.rear){
            console.log("underflow")
        } else {
            this.items[this.front] = null
            this.front += 1
        }
    }
    
    isEmpty(){
        console.log(this.front === this.rear)
    }
    
    peek(){
        console.log(this.items[this.front])
    }
}

let qu = new TechQ(4)
qu.enque(10)
qu.printQueue()
qu.enque(11)
qu.printQueue()
qu.enque(12)
qu.printQueue()
qu.enque(13)
qu.printQueue()
qu.enque(14)
qu.printQueue()
qu.peek()
qu.isEmpty()
qu.enque(14)
qu.enque(14)
qu.printQueue()
qu.deque()
qu.printQueue()
qu.deque()
qu.printQueue()
qu.deque()
qu.printQueue()
qu.deque()
qu.printQueue()
qu.deque()
qu.printQueue()
qu.isEmpty()
