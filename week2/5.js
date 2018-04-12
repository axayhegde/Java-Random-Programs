//Write An Algorithm in Javascript to find the Power Function with Left Shift(1<<N) and without Left Shift, M^N Power Function.


//Power of function using left shift

function leftPow(power){
    var base = 2;
    console.log('Using regular math.power');
    var ans = Math.pow(2,4);
    console.log(ans);

    console.log('Using left shift');
    var answerLeftShift = 1 << power;
    console.log('Answer is -- > ' + answerLeftShift);

}


function pow(base,power){
    var q=1;
    for (var i=0;i<power;i++)
    {
        q*=base;
    }
    console.log('Power of base '+ base + ' to the power ' + power+' is ' + q);

}
pow(3,6);
leftPow(4);