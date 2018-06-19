//Check if a number is different between a range

function checkIfNumberInRange(low,high,number){
    if(number > low && number < high){
        console.log("True");
    }else{
        console.log("False");
    }
}

checkIfNumberInRange(30,600, 55);