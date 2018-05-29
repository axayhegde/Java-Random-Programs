function balanced(string){
    return string.split("").reduce(function(previous,char){
        if(char === "("){
            return ++previous;
        }
        if(char === ")"){
            return --previous;
        }

    },0);
}

console.log(balanced("()"));