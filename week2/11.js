//Write An Algorithm using Javascript to swap two numbers using temporary variables, using arithmetic operators, using logical operators?(Swapping should be done using 5 methods)



function numberSwap(a,b){

// Without Temp variable
    a = a+b;
    b = a-b;
    a = a - b;

    console.log(a);
    console.log(b);


// With XOR


    a = 5;
    b = 10;

    console.log('A,B before ' + a + '--' + b);

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log('A final after --> ' + a);
    console.log('B final after --> ' + b);

}

numberSwap(5,10)