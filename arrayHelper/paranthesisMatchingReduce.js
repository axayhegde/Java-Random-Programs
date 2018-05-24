//Balancing the parathesis string using reduce

var str = "(())";
var str1 = "(()";
var str2 = "(()())";
var str3 = "(1 + (2) + (3))";

var desired = str3.replace(/[0-9 +\-*\/]/gm,'');
var strArr = desired.split("");

console.log(str3);

const isParamBalance = (strArr) =>  strArr.reduce((prev,char) => {

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
if(isParamBalance(strArr) === 0){
    console.log("The Parenthesis are balanced!");
}else{
    console.log("The Parenthesis are NOT balanced!");
}
