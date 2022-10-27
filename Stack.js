class TechStack{
    constructor(size){
        this.size = size
        this.items = Array(size).fill(null);
        this.top = -1;
    }
    
    isEmpty(){
        console.log(this.top === -1)
    }
    
    push(newItem){
        if(this.top === this.size - 1){
            console.log("Overflow!")
            return
        }
        this.top += 1;
        this.items[this.top] = newItem;
    }
    
    peek(){
        console.log(this.items[this.top])
    }
    
    printStack(){
        console.log(this.items)
        console.log("Top: " + this.top)
    }
    
    pop(){
        if(this.top !== -1){
            this.items[this.top] = null
            this.top -= 1;
        } else { 
            console.log("underflow!")
        }
    }
}

tStack = new TechStack(4);
tStack.isEmpty()
tStack.printStack()
tStack.push(1)
tStack.printStack()
tStack.push(2)
tStack.printStack()
tStack.peek()
tStack.push(3)
tStack.printStack()
tStack.push(4)
tStack.printStack()
tStack.isEmpty()
tStack.push(5)
tStack.printStack()
tStack.push(6)
tStack.peek()
tStack.printStack()
tStack.push(7)
tStack.pop()
tStack.printStack()
tStack.pop()
tStack.printStack()
tStack.pop()
tStack.printStack()
tStack.peek()
