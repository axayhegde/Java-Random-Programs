//Balancing the parathesis string using reduce


var str = "(())";
var str1 = "(()";
var str2 = "(()())";

var strArr = str2.split("");

const isParanBalance = (strArr) =>  strArr.reduce((prev,char) => {

    if(prev < 0){
        return prev;
    }
    if(char === "("){
        ++prev;
    }
    if(char === ")"){
        --prev;
    }
    return prev;

}, 0)
if(isParanBalance(strArr) === 0){
    console.log("The Parenthesis are balanced!");
}else{
    console.log("The Parenthesis are NOT balanced!");
}
