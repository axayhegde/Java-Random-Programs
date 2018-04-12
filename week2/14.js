//Generate Random between in a given Range?

function randomNumberGivenRange(lRange,hRange){

    //Generating numbers for a given range

    var number = Math.floor((Math.random() * hRange) + 1);
    console.log('Generated random number between ' + lRange + ' and '+ hRange + ' is ' + number);
}

//Function Call
randomNumberGivenRange(1,10);