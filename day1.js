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