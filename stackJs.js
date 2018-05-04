//Code snippets to understand stacks

function Stack(){

    let items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(element){
        items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };
    this.size = function(){
        return items.length;
    };
    this.clear = function(){
        items = [];
    };
    this.print = function(){
        console.log(items);
    }
    this.search = function(value){
        console.log('Searching for value --> ' + value);
        if(items.includes(value)){
            console.log('Value Present in stack');
        }else{
            console.log('Value ' + value +' not found in stack');
        }

    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.search(6);

console.log(stack.print());



