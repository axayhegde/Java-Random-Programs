/* Swap all odd and even bits
Given an unsigned integer, swap all odd bits with even bits. For example, if the given number is 23 (00010111),
it should be converted to 43 (00101011). Every even position bit is swapped with adjacent bit on right side
(even position bits are highlighted in binary representation of 23), and every odd position bit is swapped with
 adjacent on left side. */

//Function to swap odd and even bits
function swapOddAndEvenBits(number){


    var evenBits;
    var oddBits;

    evenBits = number & 0xAAAAAAAA;
    oddBits  = number & 0x55555555;

    //Right shifting all even bits
    var rightShiftedEvenBits = evenBits >> 1;
    var leftShiftedOddBits = oddBits << 1;

    console.log('Entered Number is ---> ' + number);
    console.log('Number with Odd and Even Number swapped is  ----> ' + (rightShiftedEvenBits + leftShiftedOddBits));

}

swapOddAndEvenBits(23);