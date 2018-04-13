//Finding absolute difference of the diagonal of the matrix


function sqMatrix(){

    var arr = [[1,2,4],[3,4,2],[5,7,8]];

    var dia1Sum = 0;
    var dia2Sum = 0;


    for(var i = 0,j = arr.length -1 ; i < arr.length, j >= 0; i++,j--){

            dia1Sum += arr[i][i];

            dia2Sum += arr[i][j];
    }
    console.log(dia1Sum);
    console.log(dia2Sum);
    var ans = Math.abs(dia1Sum - dia2Sum);
    console.log('Ab Diff ---- > ' + ans);
}
sqMatrix();

/*
1 2 4
3 4 2
5 7 8

2,0
1,1
1,2*/


