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
