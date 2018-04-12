//Write An Algorithm using Javascript to Add, Subtract, Multiply two given Matrices

function matirxAddition(arr, arr1) {
    var ans = [];
    if (arr.length = arr1.length) {
        for (var i = 0; i < arr.length; i++) {

            ans[i] = arr[i] + arr1[i];

        }
    }
    console.log('Added matrix are --> ' + ans);

}

var arr = [1, 2, 3, 4];
var arr1 = [2, 3, 4, 5];

matirxAddition(arr, arr1);


//Subtract two matrices

function matrixSubtraction(arr, arr1) {
    var ansSub = [];
    if (arr.length = arr1.length) {
        for (var i = 0; i < arr.length; i++) {

            ansSub[i] = arr[i] - arr1[i];
        }
    }
    console.log('Subtracted Matrix are --- > ' + ansSub);

}

matrixSubtraction(arr, arr1);



var arr2 = [[1, 2], [3, 4]];
var arr3 = [[5, 6], [7, 8]]
//Matrix Multiplication
function matrixMultiplication(arr, arr1) {

    var result = [];
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
    console.log('Matrix Multiplication Result -----> ' +result);
}
matrixMultiplication(arr2,arr3);