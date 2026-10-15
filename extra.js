let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

// bigint 0n is falsy, any other bigint is truthy
// [ ] empty array and { } empty object is truthy

//The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when something is null or undefined.

//Basic example
let username = null;

let name = username ?? "Guest";

console.log(name);

//Output:

//Guest

//Because username is null, "Guest" is used.

//The important difference: ?? vs ||
let age = 0;

console.log(age ?? 18); // 0
console.log(age || 18); // 18

//Why?

// ?? → uses the right side only if the left side is null or undefined
// || → uses the right side if the left side is any falsy value (0, "", false, null, undefined, NaN)