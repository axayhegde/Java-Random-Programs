// Removing duplicate charaters from a string.



function removeDup(myStr){

    var arr =myStr.split('');
    console.log(arr);

    var arr2 = [];

    arr.forEach(function(char){
        if(arr2.length == 0){
            arr2.push(char);
        }
        if(arr2.includes(char)){
            console.log('repeating character---> '+ char);
        }else{
            arr2.push(char);
        }
    })
    console.log('Duplicate Characters ' + arr2.toString() );

}

var theString = "akshay";

console.log(removeDup(theString));

