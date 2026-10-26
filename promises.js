const promiseone = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("async is completed");
        resolve()
    },2000)
})
promiseone.then(function(){
    console.log('task is completed')
})