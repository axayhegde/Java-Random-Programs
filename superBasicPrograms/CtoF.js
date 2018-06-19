//Convert Temperature to and from C and F

function CToF(temp) {

    let fahrenheit =  (9 / 5) + 32;
    console.log("Centigrade: " + temp  + " to fahrenheit ---> " + fahrenheit);

}
function FToC(temp) {

    let centigrade =  (temp - 32) * 5 / 9;
    console.log("Fahrenheit: " + temp  + " to Centigrade ---> " + centigrade);

}

CToF(10);
FToC(33);