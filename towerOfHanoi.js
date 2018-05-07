/* Implementation of towers of Hanoi. This works for more than 3 rings. A basic manipulation of which rings goes to which pegs at a certain order.
* It follows two basics rules.
* a) We cannot move more than one ring at a time
* b) A larger ring cannot be placed on a smaller ring
* */



function towersOfHanoi(N,fromPeg,toPeg,extraPeg){
    if(N == 1){
        console.log("Move Disk from Peg" + fromPeg + " to Peg " + toPeg);
    }else{
        towersOfHanoi( N-1, fromPeg, extraPeg, toPeg );
        towersOfHanoi( 1, fromPeg, toPeg, extraPeg );
        towersOfHanoi( N-1, extraPeg, toPeg, fromPeg );
    }
}

towersOfHanoi(3,"A","B","C");

