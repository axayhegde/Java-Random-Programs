//Display the current date time in the following format -:Today is : Tuesday.  Current time is : 10 PM : 30 : 38


let today = new Date().getDay();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

let dayName = dayList[today];
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

let text;
if (hours > 11) {
    text = "PM";
} else {
    text = "AM";
}


console.log("Today is : " + dayName);
console.log("Current Time is :" + hours + " " + text + " : " + minutes + " : " + seconds);