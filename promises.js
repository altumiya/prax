const promiseone = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("async is completed");
        resolve()
    },2000)
})
promiseone.then(function(){
    console.log('task is completed')
})

const promise3 =new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("async2 is completed");
        resolve({user : "altaf" , email : "altaf@g.com"})
    },2000)
})
promise3.then(function(user){
   console.log(user)
})

const promise4 =new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false //if true it will return error in console
        if(!error){
             resolve({username : "altaf" , email : "altaf@g.com"})
        }
        else{
            reject('something is wrong')
        }
        
    },2000)
})
promise4.then((user)=>{
   console.log(user);
   return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log("error") 
})