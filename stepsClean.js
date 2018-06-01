function steps(n){
    for (let rows=0; rows<n;rows++){
        let stair = '';
        for (let col=0;col<n;col++){
            if(col <= rows){
                stair += '#';
            }
            else{
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

steps(5);