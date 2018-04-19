//Implementation of Linear Search


function linearSearch(number){
    var arr = [2,5,7,3,8,9];
    var found = false;


    for(var i = 0; i < arr.length; i++){
        if(number == arr[i]){
            console.log("The number " + number + " is found at " + i + " position in the array");
            found = true;
        }
    }
    if(!found){
        console.log("Number not found");
    }

}
linearSearch(2);