// Remove Duplicate Numbers from an Array in Javascript


function removeDup(arr){


//Traversing and enforcing a unique clause
    var test= [];

    for(var i = 0; i < arr.length; i++){

        if(!test.includes(arr[i])){
            test.push(arr[i]);
        }
    }
    console.log(test);

}
var arr = [2,3,4,5,5,7,7];
removeDup(arr);
