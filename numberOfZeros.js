//Used to calculate number of zeros in a range


function noOfZeros(range){
    var count = 1;
    var  resultArr = [];
    resultArr.push(0);
    for(var i = 1; i < range; i++){
        if(i % 10 == 0){
            count++;
            resultArr.push(i);
        }
    }
    console.log('The number of zeros in range to ' + range);
    console.log('Count : ' + count);
    console.log('Result : ' + resultArr);

}

var range = 1000;
noOfZeros(range);

