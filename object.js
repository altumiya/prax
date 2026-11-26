//1. Object Literal

//An object literal is created using curly braces {}.

const user1 = {
  name: "Altaf",
  age: 30,
  city: "Mumbai"
};

console.log(user1);

//Output:

//{
//  name: "Altaf",
//  age: 30,
 // city: "Mumbai"
//}

//This is the preferred and most common way to create objects.

//2. Singleton Object

//A singleton object is created using the Object constructor.

const user2 = new Object();

user2.name = "Altaf";
user2.age = 30;
user2.city = "Mumbai";

console.log(user2);

//Output:

//{
//  name: "Altaf",
//  age: 30,
//  city: "Mumbai"
//}

const mysym = Symbol("key12")
const jsuser = {
    name: "altaf",
    "full name": "altaf hussain",
    [mysym] : "key1",
    age: 31,
    location: "mumbai",
    isloggedin: false,
    days: ["monday", "tues", "weds"]
};

console.log(jsuser.age); // 31 — dot notation automatically treats `age` as a string key

// 31 — when using [], the key must be a string ("") or (''); without quotes, JS treats it as a variable
console.log(jsuser["age"]); 

// "altaf hussain" — [] is the only way to access keys with spaces; dot notation (jsuser."full name") throws a SyntaxError
console.log(jsuser["full name"]);
// Use [] WITHOUT quotes to access a Symbol property (quotes like jsuser["mysym"] look for a string key and return undefined)
console.log(jsuser[mysym]) // key1
console.log(typeof mysym) // symbol
console.log(typeof jsuser[mysym]) //string

// If you store a key name in a variable, omit the quotes inside []:
const key = "location";
console.log(jsuser[key]); // "mumbai" (evaluates the variable `key`)

//Example of Object.freeze()
const frozenUser = {
  name: "Altaf",
  age: 30
};

Object.freeze(frozenUser);

frozenUser.name = "Ahmed"; // Ignored
frozenUser.city = "Mumbai"; // Ignored
delete frozenUser.age; // Ignored

console.log(frozenUser);

//Output:

//{
 // name: "Altaf",
 // age: 30
//}
//Without Object.freeze()
const user5 = {
  name: "Altaf"
};

user5.name = "Ahmed";
user5.city = "Mumbai";

console.log(user5);

//Output:

//{
//  name: "Ahmed",
//  city: "Mumbai"
//}
//Check if an object is frozen
const user6 = {
  name: "Altaf"
};

Object.freeze(user6);

console.log(Object.isFrozen(user6));

//Output:

//true

// shallowcopy example
const original = {
  name: "Altaf",
  details: {
    city: "Mumbai",
    skills: ["JS", "TS"]
  }
};


const shallowCopy = { ...original };

shallowCopy.name = "Ahmed";                // Mutates only the shallow copy
shallowCopy.details.city = "Delhi";       // ❌ Mutates BOTH (nested reference is shared)

console.log("Original after shallow change:", original.details.city); // "Delhi"
console.log("Shallow copy city:", shallowCopy.details.city);          // "Delhi"

// Reset
original.details.city = "Mumbai";


//  DEEP COPY example

// Note: JSON.parse(JSON.stringify(obj)) also works, but drops Dates, Functions, and undefined.
const deepCopy = structuredClone(original); // Creates a native deep copy, duplicating all nested objects and complex types independently without sharing memory references.

deepCopy.name = "Zaid";
deepCopy.details.city = "Pune";           // ✅ Mutates ONLY deepCopy
deepCopy.details.skills.push("Python");

console.log("Original details:", original.details);
// { city: 'Mumbai', skills: [ 'JS', 'TS' ] }

console.log("Deep copy details:", deepCopy.details);
// { city: 'Pune', skills: [ 'JS', 'TS', 'Python' ] }

/*
Before structuredClone(), developers relied on two imperfect approaches for deep copying:
1. Spread Operator ({ ...obj }) / Object.assign(): Only creates a shallow copy. Nested objects and arrays still point to the same references in memory.
2. JSON.parse(JSON.stringify(obj)): A hacky deep copy that has major limitations:
  - Turns Date instances into plain ISO strings.
  - Completely deletes undefined, Symbol, and Infinity/NaN (which turn into null).
  - Silently drops Map, Set, RegExp, ArrayBuffer, and Blob.
  - Crashes with a fatal error if the object contains circular references (TypeError: Converting circular structure to JSON).
structuredClone() eliminates all of those issues natively.
*/

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
//const obj3 = {obj1, obj2}
var obj3 = Object.assign({},obj1,obj2)
var obj3 = { ...obj1, ...obj2 };
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//In JavaScript, the standard way to retrieve and log the keys of an object is by using the Object.keys() method. This method returns an array containing all the property names (keys) of the object.

// 1. Create an object
const userProfile = {
  name: "Alice",
  age: 28,
  role: "Software Developer",
  isActive: true
};

// 2. Get the keys using Object.keys()
const keysArray = Object.keys(userProfile);

// 3. Console log the array of keys
console.log(keysArray);
//Console Output:

//[ 'name', 'age', 'role', 'isActive' ]
//Logging Keys One by One
//If your goal is to log each key individually rather than as a single array, you can combine Object.keys() with a forEach loop:

const userProfile1 = {
  name: "Alice",
  age: 28,
  role: "Software Developer"
};

Object.keys(userProfile1).forEach(key => {
  console.log("Key:", key);
});
//Console Output:

//Key: name
//Key: age
//Key: role

// Object Destructuring
//Instead of accessing properties one by one (e.g., user.name, user.age), you can unpack them directly.

const userDetails = {
  name: "John",
  age: 32,
  city: "Mumbai"
};

// Destructuring the object
const { name, age, city } = userDetails;

console.log(name); // Output: "John"
console.log(age);  // Output: 32
console.log(city); // Output: "Mumbai"
//Advanced Object Destructuring
//You can also assign default values or rename the variables while destructuring:

const laptop = {
  brand: "Dell",
  model: "XPS 15"
};

// 'brand' is renamed to 'manufacturer'
// 'ram' doesn't exist, so it falls back to the default value of "16GB"
const { brand: manufacturer, model, ram = "16GB" } = laptop;

console.log(manufacturer); // Output: "Dell"
console.log(ram);          // Output: "16GB"

let obj11 = {
    name:"altaf",
    age:32,
    isNaN: false

}
let obj21 = {
    comp: "ibm",
    exp:"3 years"
}
let obj3 = {...obj11, ...obj21};

console.log(obj3);
//When you combine objects using {...obj1, ...obj2}, the last object's value wins if both objects have the same key.

let developers_array = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8
  }
]; 


// {
//   BE: ["Jane", "James"]
//   FE: ["John"]
// }

let result = developers_array.reduce((prev, curr)=>{
  if(curr.dept == "BE"){
    prev[curr.dept].push(curr.first)
  }else{
    // prev.push(curr.first)
    prev[curr.dept].push(curr.first)
  
  }
  
  
  return prev
}, {BE:[], FE:[]})

console.log(result)  //{ BE: [ 'Jane', 'James' ], FE: [ 'John' ] }

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let result = users.reduce((prev, curr)=>{
  prev[curr.id]=curr;
  // prev['ann']=curr;
  
  return prev
}, {})

console.log(result) // in one object 
// {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];
let averageAge = arr.reduce((sum, person) => sum + person.age, 0) / arr.length;

console.log(averageAge); // 28
