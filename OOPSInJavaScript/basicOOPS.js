

//Just a basic brush up of OOPS concepts



var myObject = {
    name : "Akshay",
    profession : "Software Developer"
}

console.log(myObject.profession);

function Employee(){} //Creating employee using prototype pattern


Employee.prototype.fName = "Akshay";
Employee.prototype.lName = "Hegde";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
    console.log (this.fName + " " + this.lName);
};



var akshay = new Employee();
/*console.log(akshay.fullName());*/


//Encapsulation Example


function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
};
​
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);
