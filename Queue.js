class TechQ{
    constructor(size){
        this.size = size
        this.front = -1;
        this.rear = -1;
        this.items= Array(size).fill(null)
    }
    
    printQueue(){
        console.log(this.items)
        console.log("Front:" + this.front)
        console.log("Rear:" + this.rear)
    }
    
    enque(newItem){
        if(this.rear < this.size - 1){
            this.rear += 1;
            this.items[this.rear] = newItem
        } else {
            console.log("Overflow!")
        }
    }
    
    deque(){
        if(this.front === this.rear){
            console.log("underflow")
        } else {
            this.front += 1
            this.items[this.front] = null
        }
    }
    
    isEmpty(){
        console.log(this.front === this.rear)
    }
    
    peek(){
        console.log(this.items[this.front + 1])
    }
}

let qu = new TechQ(4)
qu.printQueue()
qu.enque(10)
qu.printQueue()
qu.enque(20)
qu.printQueue()
qu.enque(30)
qu.printQueue()
qu.enque(40)
qu.printQueue()
qu.enque(50)
qu.enque(50)
qu.enque(50)
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
qu.enque(10)
qu.printQueue()
