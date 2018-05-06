//Find the first non repeating character in a string
function findFirstNone(myStr){

    var newString = myStr.split('');
    var counter = 0;

    for(var i = 0; i < newString.length; i++){
        counter = 0;

        for(var j = 0; j < newString.length; j++){
            if(newString[i] == newString[j]){
                counter++;
            }
        }
        if(counter < 2){
            return newString[i];
        }
    }
}

var myStr = "nitin";
console.log(findFirstNone(myStr));