//Implement left shift values using general formula


function leftShift(myNum,leftShiftNumber){

    var resultFromBuiltIn = myNum << leftShiftNumber;

    console.log('Result From Built in --- > ' + resultFromBuiltIn);

//Result from formula
    var twoPowerI = 2;

    for(var i = 0; i < leftShiftNumber - 1; i++){
        twoPowerI = 2 * twoPowerI;
    }
    console.log('Result from using Formula --- >' + myNum * twoPowerI);
}

//Calling the function
leftShift(3,2);