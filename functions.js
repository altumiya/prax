function add2num(num1,num2){
  return num1 + num2
}
const result = add2num(5,4)
console.log(result)

(function (name){
  console.log(`Hello , ${name}`);
})("Altaf");

const user={
    username:"altaf",
    price:999,
    welcomemsg : function(){
        console.log(`${this.username}, welcome to world`) //altaf, welcome to world
    }
}
user.welcomemsg()
console.log(this) // {}

const one= ()=>{
    console.log(this) //{}
}
one()

const add= (num1, num2)=>{
    return num1 + num2
    
}
console.log(add(2,4)) //6

const add1= (num1, num2)=> num1 + num2
    
console.log(add1(3,4)) //7

const add3= (num1, num2)=> ({username:"altaf"})
    
console.log(add3(3,4))   //{ username: 'altaf' } The parentheses around { username: "altaf" } tell JavaScript to treat it as an object literal and return it from the arrow function:

function  multipleby5(num){
    return num*5
}
multipleby5.power =2
console.log(multipleby5(5)) //25
console.log(multipleby5.power) //2
console.log(multipleby5.prototype) //{}


// lexical scope eg
function outer(){
    let username ="altaf";
    function inner(){
        console.log("inner", username) //inner altaf
    }
    inner()
    console.log("outer", username) //outer altaf
}
outer()

//closure eg 
function outer(){
    let username ="altaf"
    let secret = "mysec"
    function inner(){
        
        console.log("inner", username) // inner altaf
    }
    function inner2(){
        console.log("inner2", username) // inner2 altaf
        console.log(secret) // mysec
    }
    inner()
    inner2()
    console.log("outer", username) // outer altaf
}
outer()