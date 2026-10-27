let myhero = ['thor', 'spiderman']
let heropower = {
    thor : "thunder",
    spider : "slinger"
}
Object.prototype.altaf= function(){
    console.log("altaf is present in all")
}
Array.prototype.heyaltaf = function(){
        console.log("altaf is present in array")

}
heropower.altaf();
myhero.heyaltaf();


function createuser(username, score, year = "not provided"){
  this.username = username
  this.score = score
  this.year = year
}
createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log(`score is  ${this.score}`)
    console.log(`year is  ${this.year}`)
}
const altaf2 = new createuser("altaf", 25, 1994)
const altu = new createuser("altumiya",25, 1994) 
altaf2.printme() //score is  25 ... year is  1994
altu.printme() //score is  25 ... year is  1994

function Setusername(username){
  this.username = username
}
function createuser(username , email, password){
    Setusername.call(this ,username) //Calls a method of an object, substituting another object for the current object.
    this.email = email
    this.password = password
}
const altaf1 = new createuser ("altaf", 'altaf@g.com', "1234" )
const altu1 = new createuser("altu","altz@g.com", "2345")
console.log(altaf1)
console.log(altu1)



class user{
    constructor(username){
        this.username = username
    }
    logme(){
console.log(`username is ${this.username}`)    
}
   
}
class teacher extends user {
    constructor(username ,email,password){
        super(username)
       this.email = email
       this.password = password
    }
    addcourses(){
        console.log(`add new couses by ${this.username}`)
    }
}
const altaf = new teacher("altu", "altaf@g.com","12345" )
altaf.addcourses()
const altumiya = new user("altumiya")
altumiya.logme()

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`

    }
}
const altaf3 = new user("altu", "altaf@g.com", 1234)
console.log(altaf3.encryptpassword())
console.log(altaf3.changeusername())

class user{
    constructor( email, password){
        
        this.email = email
        this.password = password
    }
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}altu`
    }
    set password(value){
         this._password = value
    }
}
const altaf = new user( "altaf@g.com", "abc")
console.log(altaf.password)