class TechStack{
    constructor(){
        this.items = Array(10).fill(null);
        this.top = 0;
    }
    
    isEmpty(){
        console.log(this.top === 0)
    }
    
    push(newItem){
        this.items[this.top] = newItem;
        this.top += 1;
    }
    
    peek(){
        console.log(this.items[this.top - 1])
    }
    
    printStack(){
        console.log(this.items)
    }
    
    pop(){
        if(this.top !== 0){
            this.items[this.top - 1] = null
            this.top -= 1;
        }
    }
}

tStack = new TechStack();
tStack.push(1)
tStack.push(10)
tStack.push(100)
tStack.peek()
tStack.isEmpty()
tStack.printStack()
tStack.pop()
tStack.printStack()
tStack.pop()
tStack.printStack()
tStack.push(101)
tStack.push(102)
tStack.peek()
tStack.push(103)
tStack.printStack()
tStack.pop()
tStack.pop()
tStack.pop()
tStack.printStack()
tStack.peek()
tStack.pop()
tStack.pop()
tStack.printStack()
tStack.printStack()
tStack.printStack()
