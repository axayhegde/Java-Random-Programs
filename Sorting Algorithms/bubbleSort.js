/*
Bubble Sort implementation

 */


function bubbleSort(arr) {

    do{
        var swapped = false;

        for(var i = 0; i < arr.length -1 ; i++ ){
            if(arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i] = arr[i + 1];
                swapped = true;
            }

        }
        return arr;
    }while(swapped)
}

var arr = [2, 1, 4, 3, 6, 7, 5];

console.log(bubbleSort(arr));