// All about promises

// promises takes two parameters resolve and reject

var promise = new Promise(function (resolve, reject){
    resolve();
});

promise.then((resolve,reject) => {
    console.log('Ran completed');
}).then((resolve,reject)=>{
    console.log('In 2nd run');
}).catch(()=>{
    console.log('Failed Run');
}).catch(()=>{
    console.log('2nd failed run');
});



