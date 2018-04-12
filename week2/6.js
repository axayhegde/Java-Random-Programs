//Write An Algorithm using Javascript finding Perfect Square Root of a Number without using Built in Function


function squareRoot(number) {

    console.log('Finding square root of a number using inbuilt functions');

    var inBuiltAnswer = Math.sqrt(number);
    if (inBuiltAnswer % 1 == 0) {
        console.log(inBuiltAnswer);
    } else {
        console.log('The given number does not have a perfect square root.');
    }

    console.log('');

    console.log('Finding square root without using inbuilt functions');

    for(var i = 1; i < number/2; i++){
        if((i * i) % number == 0){
            console.log(i);
            console.log('The square root of ' + number + ' is ' + i);
        }
    }
}

squareRoot(9);