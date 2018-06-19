//JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case


function firstCaps(str){
    let lowerStr = str.toLowerCase();
    let strings = lowerStr.split(" ");
    let newArray = [];

    for(let x = 0; x < strings.length; x++){
        newArray.push(strings[x].charAt(0).toUpperCase()+strings[x].slice(1));
    }
    console.log(newArray.join(" "));

}

firstCaps("this will be tHe first string");