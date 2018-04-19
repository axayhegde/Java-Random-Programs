
//Function to implement binary search

/* Theory : Search the sorted array but dividing it in half. Check the middle element with the search element. If the element is lesser than
the middle element start searching in the lower half of the array. Else search the higher half ot the array

 */

function binarySearch(number){

    var arr = [1,2,3,4,5,6,7,8,9,10]; // The array has to be sorted for this to work. We can use sort() to get this too

    var low  = 0 , high = arr.length -1 ,mid ;
    while (low <= high){
        mid = Math.floor((low+high)/2);
        if(arr[mid] === number) return mid ;
        else if (arr[mid]<number) low = mid+1;
        else high = mid-1;
    }
    return -1 ;

}
console.log(binarySearch(5));