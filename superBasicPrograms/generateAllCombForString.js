//Write a function to generate all combinations of a string


function combu(s){
    var buff = [];
    var res = [];
    var count = 0;
    for (i=0;i<s.length;i++){
        buff = [s[i]];
        var index=0;
        while(res[index]){
            buff.push(''+res[index]+s[i]);
            index++;
        }
        res = res.concat(buff);

    }
    console.log(res);
}
combu('abc');