//This problem is to find the largest sum of two numbers


//Solving by finding the largest two numbers


var arr = [1,2,3,4,5];
var largestNum = 0;
var secondLargest = 0;
var largestSum = 0;

for(var i = 0; i < arr.length; i++){
    if(arr[i] > largestNum){
        secondLargest = largestNum;
        largestNum = arr[i];
    }

    if(arr[i] > secondLargest && arr[i] < largestNum){
        secondLargest = arr[i];
    }

}
largestSum = largestNum + secondLargest;

console.log(largestSum);
