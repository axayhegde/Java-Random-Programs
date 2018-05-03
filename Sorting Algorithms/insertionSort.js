/*
* Insertion Sort algorithm. Basically we divide the array into two parts. The sorted array which initially contains just one element and the rest of the unsorted array.
* We then take a copy of the first element in the unsorted part of the array and compare with the sorted part of the array and find the appropriate position for it
*
* */



function insertionSort(unsortedList){

    var len = unsortedList.length;

    for(var i = 0; i < len; i++){

        var temp = unsortedList[i];
        var j = i - 1;

        while(j >= 0 && unsortedList[j] > temp ){
            unsortedList[j + 1] = unsortedList[j];
            j--;
        }

        unsortedList[j + 1] = temp;
    }
    return unsortedList;
}


var arr = [3,5,2,1,8,4,7,6];

console.log(insertionSort(arr));