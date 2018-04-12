//  Write a Javascript Program to print Binary representation of a given number. (Use bitwise AND operator)

//Iterative Method

function iterativeBinaryRepNumber(number) {

   console.log((number >>> 0).toString(2));

}

iterativeBinaryRepNumber(10);