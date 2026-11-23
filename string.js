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

// 3. Negative index: Neither charAt() nor [] supports negative indexing
console.log("\n--- 3. Negative Index ---");
console.log("charAt(-1):", str.charAt(-1)); // ""
console.log("str[-1]:", str[-1]);           // undefined
console.log("at(-1):", str.at(-1));         // "o" (modern way to get the last character)

// 4. Non-numeric index: charAt() converts invalid input to 0; [] returns undefined
console.log("\n--- 4. Non-Numeric Index ---");
console.log("charAt('abc'):", str.charAt("abc")); // "h" (treated as index 0)
console.log("str['abc']:", str["abc"]);           // undefined

// 5. Missing or undefined index: charAt() defaults to 0; [] returns undefined
console.log("\n--- 5. Missing / Undefined Index ---");
console.log("charAt():", str.charAt());             // "h" (defaults to index 0)
console.log("str[undefined]:", str[undefined]);     // undefined
