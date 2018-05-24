var primaryColors =
    [
        {color : "red"},
        {color : "yellow"},
        {color : "blue"}
    ];

console.log(primaryColors.reduce(function(newArr , currentColor){

    return newArr.push(currentColor.color);
    /*return newArr;*/
},[]));



