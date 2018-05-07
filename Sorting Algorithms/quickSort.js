function posNegZ(arr){

    var countPos = 0;
    var countNeg = 0;
    var countZe = 0;
    var denom = arr.length;

     arr.forEach(function(val){
         if(val > 0){
             countPos++;
         }else if(val < 0){
             countNeg++;
         }else if(val == 0){
             countZe++;
         }
     })
    console.log((countPos/denom).toFixed(6));
    console.log((countNeg/denom).toFixed(6));
    console.log((countZe/denom).toFixed(6));



}

var arr = [-4,3,-9,0,4,1];

posNegZ(arr);