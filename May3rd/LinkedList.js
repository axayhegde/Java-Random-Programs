function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Adding Head Node;

LinkedList.prototype.addToHead = function(value){
    var newNode=new Node(value,this.head,null); //creating new node
    if(this.head)
    {
        this.head.prev=newNode;
    } //If head is present add new node to head.prev
    else
    {
        this.tail=newNode;
    } //else add new node to head because no head means no node in linked list

    this.head = newNode; //No matter head is present or not we need to add newNode as head
};



//Adding a Tail Node

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value,null,this.tail);
    if(this.head){
        this.tail.next=newNode;
    }   //if head is present add new Node to the head.next
    else{
        this.tail=newNode;
    }
    this.tail = newNode;
}


//Traversing a linked list and displaying all values

LinkedList.prototype.printLinkedList = function(){

    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.value + " ";
        curr = curr.next;
    }
    console.log(str);
}

// Searching for nodes in Linked List

LinkedList.prototype.findNode = function(value){

    var curr = this.head;

    while (curr) {
        if(curr.value == value){
            console.log('Found String with value ---> ' + value );
            break;
        }else{
            curr = curr.next;
        }
        console.log('String not found');
    }
}

//Removing Head Node

LinkedList.prototype.removeHead = function(){
    if(!this.head) return null; //No head means empty list
    var val = this.head.value; //Just storing head value
    this.head=this.head.next; //Move head to head.next
    if(this.head) this.head.prev=null; //If head is present (means head.next) remove head.prev value
    else this.tail=null; //No head means no tail (empty list)
    return val;
};

//Removing from tail Node

LinkedList.prototype.removeTail = function(){
    if(!this.head){
        return null;
    }

    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail){
        this.tail.next = null;
    }else{
        this.head = null;
    }
    return val;

}


var ll = new LinkedList();

ll.addToHead(5);
ll.addToHead(6);
ll.addToHead(7);
ll.addToHead(8);





