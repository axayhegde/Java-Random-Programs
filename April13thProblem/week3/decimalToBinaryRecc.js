//Reccusrive function to find decimal to binary


function func2(n){
    if(n == 0){
        return;
    }

    func2(parseInt(n/2));
    console.log(n%2);
}

func2(21);