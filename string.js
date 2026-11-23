let gamename = new String("altaf")
console.log(gamename)
console.log(gamename[2]) //t
console.log(gamename.__proto__) //{} methods in console of browser

const str = "hello";

// 1. Valid index: Both return the exact same character
console.log("--- 1. Valid Index ---");
console.log("charAt(1):", str.charAt(1)); // "e"
console.log("str[1]:", str[1]);           // "e"
