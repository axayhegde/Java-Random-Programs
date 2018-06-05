//Program to convert number to roman Numeral upto 3999


function numberToRoman(number){

    let M = ["", "M", "MM", "MMM"];
    let C = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let X = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let I = ["", "I", "II", "III", "IV", "V","VI", "VII", "VIII", "IX"]


    let thousands  = M[Math.floor(number / 1000)];
  let hundreds = C[Math.floor((number%1000)/100)];
    let tens       = X[Math.floor((number%100)/10)];
    let ones       = I[number % 10 ];

    console.log( thousands + hundreds + tens + ones);

}
numberToRoman(3999);