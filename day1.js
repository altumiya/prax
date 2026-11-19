let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mysubDate = new Date (2023, 0, 23)
console.log(mysubDate.toDateString());

let mysubDate2 = new Date (2023, 0, 23,5,7)
console.log(mysubDate2.toLocaleString());


let now = new Date();

console.log(now);
console.log(now.toLocaleString());
console.log(+True) //1
console.log(True+) // error
console.log(+ "") // 0

const employees = [
  { id: 101, name: "Amit", department: "Engineering", remote: true },
  { id: 102, name: "Priya", department: "Design", remote: false },
  { id: 103, name: "Rahul", department: "Marketing", remote: true }
];

console.table(employees);
// This will only display the 'name' and 'department' columns
console.table(employees, ["name", "department"]);

const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai"];
let state;  //give undefine

console.table([cities, state]);

let score = '33abc'  //if null than console show 0
let valueinnum = Number(score)
console.log(typeof valueinnum) // Number 
console.log(valueinnum) //NaN same as in undefined

let loggin = "altaf" || 1  // if "" than false
let boollogin = Boolean(loggin)
console.log(boollogin) // true

// null is a standalone "empty" value that JS converts to 0 in relational comparisons (making null >= 0 true), 
// but not in equality checks (making null == 0 false).

// typeof bigint returns "undefined" because lowercase `bigint` is treated as an undeclared variable—
// use a BigInt value like `typeof 10n` ("bigint") or the constructor `typeof BigInt` ("function") instead.

// stack for primitive and heap for non primitive memory use
// stack give copy and heap give reference

// stack example
let user1 = "altaf"
let user2 = user1
user2 = "altumiya"
console.log(user1)
console.log(user2) // so copy of user1 changed to altumiya 

// heap example as refrence also changed
let userone = {
    email: "altaf@eg.com",
    password : 12345
}
let usertwo = userone
usertwo.email = "altumiya@eg.com";
console.log(usertwo) //{ email: 'altumiya@eg.com', password: 12345 }
console.log(userone) //{ email: 'altumiya@eg.com', password: 12345 }

// console.count() logs the number of times it has been called, 
// acting as a built-in counter for debugging without needing to declare a manual counter variable like let count = 0.
console.count();          // default: 1
console.count();          // default: 2

console.count("click");   // click: 1
console.count("click");   // click: 2
console.count("hover");   // hover: 1

// console.countReset(label) to bring a specific counter back to 0:
console.countReset("click");
console.count("click");   // click: 1 (starts over)

// console.time() starts a timer, and console.timeEnd() stops it and 
// logs the total elapsed time in milliseconds—acting like a built-in stopwatch to measure how fast a piece of code runs.

console.time("loopTimer");

for (let i = 0; i < 1000000; i++) {
  // some task
}

console.timeEnd("loopTimer"); // loopTimer: 4.12ms (exact time varies)
console.time("apiFlow");

// After step 1 finishes
console.timeLog("apiFlow", "DB query done"); // apiFlow: 45.2ms DB query done

// After step 2 finishes
console.timeEnd("apiFlow");                  // apiFlow: 112.8ms

//1. ReferenceError -> Variable does not exist or is out of scope.
  console.log(userName);            // ReferenceError: userName is not defined
  console.log(score); let score=10; // ReferenceError: Cannot access before initialization

//2. TypeError -> Variable exists, but operation is invalid for its type.
   let user = null;
   console.log(user.name);           // TypeError: Cannot read properties of null

   let age = 25;
   age();                            // TypeError: age is not a function

   const pi = 3.14;
   pi = 3.15;                        // TypeError: Assignment to constant variable

// Quick Rule:
// - ReferenceError = "I can't find this variable."
// - TypeError = "I found it, but you can't do that with its type."

//Hoisting = JS moves declarations to the top of their scope before running code.

//1. var -> Hoisted and initialised as undefined
   console.log(a); // undefined (no error)
   var a = 10;

//2. let & const -> Hoisted, but stays in the Temporal Dead Zone (TDZ)
   console.log(b); // ReferenceError: Cannot access 'b' before initialization
   let b = 20;

//3. Function Declaration -> Fully hoisted (works before it is defined)
   sayHi();        // "Hi!"
   function sayHi() {
     console.log("Hi!");
   }

//4. Function Expression / Arrow Function -> Follows var/let/const rules
   greet();        // TypeError: greet is not a function (var is undefined)
   var greet = () => console.log("Hello!");

//TDZ = The gap between the start of a scope and the line where a `let` or `const`
//variable is declared. Accessing it in this zone throws a ReferenceError.

//Example:
   {
     // --- TDZ for `x` starts here ---
     console.log(x); // ReferenceError: Cannot access 'x' before initialization
     let x = 50;     // --- TDZ for `x` ends here ---
     console.log(x); // 50 (safe to use now)
   }

// Quick Rules:
// - Only declarations are hoisted, NOT values (initialisations).
// - Function declarations work early | var -> undefined | let/const -> ReferenceError.
// - TDZ only applies to `let` and `const` (never `var`), helping catch bugs early.

// typeof null, [], and object = object
// typeof NaN = number
// type of undefined = undefined
// type of function () {} = function

/*
Spread Operator (...) = Unpacks elements of an array or properties of an object
                        to easily copy, merge, or pass them around.

WHAT DOES "COPY AT ONLY ONE LEVEL" (SHALLOW COPY) MEAN?
- Level 1 (Top-level primitives like string/number):
  Copied by VALUE -> Changing the copy does NOT change the original.

- Level 2+ (Nested objects or arrays):
  Copied by REFERENCE (same memory address) -> Changing a nested value in the
  copy WILL ALSO change the original!
*/

const user = {
  name: "Amit",                 // Level 1 (primitive)
  address: { city: "Mumbai" }   // Level 2 (nested object)
};

const copy = { ...user };       // Shallow copy using spread

// 1. Changing Level 1 (Safe - independent copy)
copy.name = "Rohan";
console.log(user.name);         // "Amit" (original is safe)
console.log(copy.name)          // Rohan
// 2. Changing Level 2 (Danger - shared reference)
copy.address.city = "Pune";
console.log(user.address.city); // "Pune" (original ALSO changed!)

// Deep copy (copies ALL levels safely)
const deepCopy = structuredClone(user);
deepCopy.address.city = "Delhi";
console.log(user.address.city); // "Pune" (original is safe)

/*
Quick Rule:
- Spread (`...`) only creates a fresh copy of the outer shell (1 level deep).
- Use `structuredClone()` when you need to copy nested objects/arrays safely.
*/
