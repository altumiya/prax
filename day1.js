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
