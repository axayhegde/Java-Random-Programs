//Calculate the value of a number to the base 2


function calculateVale(number){

    //Using inbuilt function
    var valBase2 = Math.log2(number);
    console.log(valBase2);


}

//Custom Function
function base2 (num) {
    if ( num == 1) {
        return 0;
    } else {
        return (1 + base2( num / 2));
    }
}

console.log(base2(8));
calculateVale(8);