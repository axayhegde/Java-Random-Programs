//Problem 2


function seriesChecker() {

    var fName = 'Akshay';
    var sName = 'Hegde';

    var fNum = 2;
    var sNum = 3;

    for (var i = fNum; i <= 100; i++) {

        if (i % fNum == 0 && i % sNum == 0) {

            console.log(fName + ' ' + sName);

        } else if (i % fNum == 0) {

            console.log(fName);

        } else if (i % sNum == 0) {

            console.log(sName);

        } else {
            console.log(i);
        }
    }
}

seriesChecker();