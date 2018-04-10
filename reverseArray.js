var arr = [1,2,3,4,5];
var temp = [];
var  j = 0;




//Reversing array using inbuilt push and push.
var p = arr.length-1;

for(var j = 0; j < arr.length/2; j++){
    console.log(arr[j]);
    console.log(arr[p]);

    var temp = arr[j];
    arr[j] = arr[p];
    arr[p] = temp;
        p--;
}
console.log(arr);


