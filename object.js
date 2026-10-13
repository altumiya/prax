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