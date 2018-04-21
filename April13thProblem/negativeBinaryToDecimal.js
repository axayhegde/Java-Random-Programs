//Negative binary to decimal

var input = "11"
let Binary;
function convertBToD(input) {
    let binary = parseInt(input, 2);
    console.log(binary);
    Binary = binary;
}

//This is decimal rep of the number
convertBToD(input);

//adding one this
var finalDecimal = parseInt(Binary + 1);


//Converting decimal to binary
function func2(finalDecimal){
    if(finalDecimal == 0){
        return;
    }

    func2(parseInt(finalDecimal/2));
    console.log(finalDecimal%2);
}


console.log(finalDecimal);
console.log('The negative representaion of ' + input + ' is : ');
func2(finalDecimal);

