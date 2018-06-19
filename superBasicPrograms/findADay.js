// Find all days between a range of years


function allDaysRange(start,end){
    let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];

    for(let i = start; i <= end; i++){
        let date = new Date(i, 0, 1).getDay();
        console.log("1st January " + i + " is "+  dayList[date]);
    }
}

allDaysRange(2019,2050);