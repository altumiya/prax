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

//Example of Object.freeze()
const user = {
  name: "Altaf",
  age: 30
};

Object.freeze(user);

user.name = "Ahmed"; // Ignored
user.city = "Mumbai"; // Ignored
delete user.age; // Ignored

console.log(user);

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