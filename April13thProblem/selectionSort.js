//This is the implementation of selection sort


function selectionSort(arr) {

    var len = arr.length;

    for(var i = 0; i < len -1 ; i++){
        var minEle = i;
        for(var j = i + 1; j < len; j ++){
            if(arr[j] < arr[minEle]){
                minEle = j;
            }
        }
        var temp = arr[minEle];
        arr[minEle] = arr[i];
        arr[i] = temp;
    }

    console.log(arr)
}

var arr=[4,8,2,1,7,3];
selectionSort(arr);