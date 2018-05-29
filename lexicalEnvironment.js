/*
function f1(){


    console.log('Global Scope');
    const x = 0;
    f2();
    console.log(x + 5);


    function f2(){
        console.log('Local Scope');
        console.log(x);
    }
}
f1();*/

var x = [1,2,4,5,1,2,1];
var temp = new Set(x);
console.log(temp);


temp.forEach(function(x){
   console.log(x);
});


for(let te in temp){
    console.log(te);
}
