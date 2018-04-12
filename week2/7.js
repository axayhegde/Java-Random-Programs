//Write An Algorithm using Javascript to check if a given number is in the following series:
//    4,16,64,256,1024,4096,16384.,......., 4^N


function checkPowerOfNumber(number,defaultNumber){

    var power = 10;
    var q = 1;
    var arr = []

    for(var j = 0; j < power; j++){

        q = q * defaultNumber;
        arr.push(q);

    }
    console.log('Generated Array for Default number : ' + defaultNumber);
    console.log(arr);


    if(arr.includes(number)){
        console.log('The number ' + number + ' is a power of ' + defaultNumber + ' !');
    }else{
        console.log('The number is not a power of ' + defaultNumber + ' !');
    }

}

checkPowerOfNumber(16384,4);