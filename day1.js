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
