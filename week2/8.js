//Write An Algorithm using Javascript to Reverse Array Elements  without using Built in  Function, with using temp array?

function reverseArrayElements(arr){

    console.log('Reversing array using temp array');
    var temp  = [];
    var j = 0;

    for(var i = arr.length-1; i >= 0; i--){
        temp[j] = arr[i];
        j++;
    }

    console.log('Regular array is ');
    console.log(arr);
    console.log('The reversed array is ');
    console.log(temp);
}

var arr = [1,2,3,4,5,6];
reverseArrayElements(arr);