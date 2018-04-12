//Implement right shift values using general formula


function rightShift(myNum,rightShiftNumber){

    var resultFromBuiltIn = myNum >> rightShiftNumber;

    console.log('Result From Built in --- > ' + resultFromBuiltIn);

//Result from formula
    var twoPowerI = 2;

    for(var i = 0; i < rightShiftNumber - 1; i++){
        twoPowerI = 2 * twoPowerI;
    }
    console.log(twoPowerI);



    console.log('Result from using Formula --- >' + Math.floor(myNum / twoPowerI));
}

//Calling the function
rightShift(6,2);