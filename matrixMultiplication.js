var result = [];

var arr = [[1, 2], [3, 4]];
var arr1 = [[5, 6], [7, 8]]


    for (var i = 0; i < arr.length; i++) {
        result[i] = [];
        for (var j = 0; j < arr1[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < arr[0].length; k++) {
                sum += arr[i][k] * arr1[k][j];
            }
            result[i][j] = sum;
        }
    }
console.log(result);

