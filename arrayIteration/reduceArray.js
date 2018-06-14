function arrayReduce() {
    var ar = [1, 2, 3, 4, 5];
    // Reduce does not have a variable sum in it's outer scope (like in forEach)
    console.log('sum:', ar.reduce(function (accumalator, currentValue) {
        return accumalator + currentValue;
    }, 0));
    // reduce() format: arr.reduce(callback()[, initialValue])
    // callback format: fn(previousValue, currentValue, index, array)
};

console.log(arrayReduce());

