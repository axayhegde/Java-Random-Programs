//For a passed string generate in alphabetical order


function sortString(str){
    let bStr = str.split("");

    let finalString = bStr.sort().join("");  //join merges array with no commas.
    console.log(finalString);

}

sortString("akshay");