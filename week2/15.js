//Given an Array Elements, Find the sum of the all elements?

function sumOfArrayElements(arr){

    var sum = 0;
    for(var i = 0; i < arr.length; i++){

        sum += arr[i];
    }

    console.log('The sum of the array is --> ' + sum);
}

var arr = [1,2,3,4,5];
sumOfArrayElements(arr);
