//  Write a Javascript Program to print Binary representation of a given number. (Use bitwise AND operator)

//Iterative Method

function iterativeBinaryRepNumber(number) {

    //Checking if numbers 0th bit is 1 or 0

    var bit;
    var arr = [];
    var binaryRep = "";

    for (var i = 0; i <= 8; i++) {
        bit = Math.pow(2,i);
        console.log(bit);
        if (number & bit == 1) {
            arr[i] = 1;
            binaryRep =  '1' + binaryRep;
        }else{
            arr[i] = 0;
            binaryRep =  '0' + binaryRep ;
        }
    }

    console.log('Binary Rep -----> '+ binaryRep);
    console.log('Array ----> ' + arr);
}

iterativeBinaryRepNumber(5);