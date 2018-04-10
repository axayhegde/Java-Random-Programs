//function to find power of m * n


function pow(base,power){
    var q=1;
    for (var i=0;i<power;i++)
    {
        q*=base;
    }
    console.log('The answer is ' + q);

}
pow(3,6);