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

iterativeBinaryRepNumber(10);