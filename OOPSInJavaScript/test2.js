//Continuing JavaScript OOPS


function Person(){}

Person.prototype.walk = function(){
    console.log('I am walking');
}
Person.prototype.sayHello = function(){
    console.log('hello');
}


//Defining the student class
function Student(){
    //Calling parent constructor
    Person.call(this);
}

//Inheriting person
Student.prototype = new Person();

//Correcting constructor pointer since it points to student
Student.prototype.constructor = Student;

//Replacing sayHello method with our own
Student.prototype.sayHello = function(){
    console.log('Student say hello');
}
Student.prototype.goodBye = function(){
    console.log('Good Bye');
}

var student1 = new Student();
student1.sayHello();
student1.goodBye();
student1.walk();