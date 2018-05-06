function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(left,right){

   var result = [];

   var lLen = left.length;
   var rLen = right.length;

   var l = 0;
   var r = 0;

   while( l < lLen && r < rLen){
       if(left[l] < right[r]){
           result.push(left[l++]);
       }else{
           result.push(right[r++]);
       }
   }
   return result.concat(left.slice(l)).concat(right.slice(r));
}

var arr = [2,5,3,7,1,9];
console.log(mergeSort(arr));