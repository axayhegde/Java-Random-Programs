//Program to find out if the number is an arm strong number or not

function isArmStrong(number) {

    let temp = parseInt(number);
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        temp = parseInt(temp / 10);
        sum = sum + (digit * digit * digit);
    }
    if(sum === number){
        console.log( number + " is an armstrong number");
    }else{
        console.log(number + " is not an armstrong number");
    }


}

isArmStrong(296);