// Given a series of numbers find the missing element - Sorted Array

function findMissing(arr,range){
    var sum = 0;
    var neededSum = 0;

    arr.forEach(function(val){
        sum = sum + val;
    })
    console.log('Sum = ' + sum);

    for(var j = 1; j <= range; j++){
        neededSum += j;
    }
    console.log('Needed Sum --> ' + neededSum);

    console.log('The missing element is ' + (neededSum - sum));


}

var arr = [1,2,4,5,6,7,8,9,10];
var range = 10;
findMissing(arr,range);



