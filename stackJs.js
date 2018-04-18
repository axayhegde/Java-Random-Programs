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
        console.log(items.toString());
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.print());



