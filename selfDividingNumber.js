/*

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
 */

function selfDividingNum(number){

    //Getting individual numbers
    var num = [];
    var flag = true;
    var testNum = number;

    while(number > 0){
        console.log(number % 10);
        num.push(number % 10);
        number = Math.floor(number/10);
    }

    console.log(num);

    for(var i = 0; i < num.length; i++){
        console.log('number - > ' + testNum  + ' num[i]--> '+ num[i]);
        if(testNum % num[i] != 0){
            flag = false;
            console.log('iteration - > ' + i + ' flag value = ' + flag + ' num[i] --> ' + num[i] );
            break;
        }
    }
    if(flag){
        console.log('This is a self dividing number');
    }else{
        console.log('Not a self dividing number');
    }

}


selfDividingNum(728);