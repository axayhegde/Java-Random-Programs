//Inheritance , Polymorphism, Abstraction and Encapsulation



/*
Class defines the charecteristics of the Object --> Object
Classes are not present in JavaScript. Prototype based programming. Inheritance is achived thorugh decorating exsisting objects which serve
as prototypes

 */


//Defining a class with constructor

function Person(gender){
    this.gender = gender;
    console.log('Gender applied');
}

Person.prototype.hiHello = function()
{
    console.log('Saying hello from here');
};

Person.prototype.test12 = function(){
    console.log('testing 12');

};


function Student(){
    Person.call(this);
    console.log('in STUDENT');
}


//Creating new Instance of a class

var person1 = new Person('Male');
var person2 = new Person('Female');
var student1 = new Student('WHAT');

var genderTeller = person1.gender;

console.log('Person1 is off this gender --> ' + person1.gender);
console.log('Person2 is off this gender --> ' + person2.gender);

console.log(person1.hiHello());

if(genderTeller === person1.gender)
    console.log("WORkED");