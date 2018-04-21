//  Write a Javascript Program to print Binary representation of a given number. (Use bitwise AND operator)

//Iterative Method

function iterativeBinaryRepNumber(number) {

    //Answer
   console.log((number >>> 0).toString(2));

    var totalBits = Math.floor(Math.log2(number) + 1);

    var binaryNumber = "";

    for(i = 0; i < totalBits; i++){
        var ithBit = ((number & (Math.pow(2,i))) === 0)? 0:1;
        binaryNumber = ithBit + binaryNumber;
    }

    console.log('Binary Number ---> ' + binaryNumber);


}

/*iterativeBinaryRepNumber(3);*/


//Function to calculate decimal to binary using reccursion

function reccursionBinary(number){
    var binary;
    if(number == 0){
        return  0;
    }else{
        return (number % 2 + 10 * reccursionBinary(number / 2));
    }
}

console.log(reccursionBinary(4));