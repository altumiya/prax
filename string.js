let gamename = new String("altaf")
console.log(gamename)
console.log(gamename[2]) //t
console.log(gamename.__proto__) //{} methods in console of browser

const str = "hello";

// 1. Valid index: Both return the exact same character
console.log("--- 1. Valid Index ---");
console.log("charAt(1):", str.charAt(1)); // "e"
console.log("str[1]:", str[1]);           // "e"

// 2. Out-of-bounds index: charAt() returns "", while [] returns undefined
console.log("\n--- 2. Out-of-Bounds Index ---");
console.log("charAt(10):", str.charAt(10)); // "" (empty string)
console.log("str[10]:", str[10]);           // undefined

// An out-of-bounds index is a position that doesn't exist in a string or array—
// either negative or greater than or equal to its length (for example, index 5 in "hello").
