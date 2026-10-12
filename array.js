const array = [1,2,3,4,5]
const newarr = array.join()

console.log(array);
console.log(newarr)
array.push(6,7)
console.log(array);
array.pop()
console.log(array);
array.unshift(9)

console.log(array);
array.shift(9)
console.log(array);

console.log(array.slice(1, 4)); //slice(start, end)
console.log(array.includes(5));

const array3 = [1,2,3,4,5]
array3.splice(2, 2, 99, 100);
console.log(array3) //splice(start, deleteCount, item1, item2, ...)

const marvel = ["spider", "iron", "hulk"]
const dc = ["bat", "supe","joke"]
//marvel.push(dc)
//const all = marvel.concat(dc)
const all = [...marvel, ...dc]
console.log(marvel);
console.log(all);

const array1=[1,2,3,[4,5],6,7,[8,9]]
const array2=array1.flat(Infinity)
console.log(array2)

console.log(Array.from("Altaf")) //to split and make array
console.log(Array.isArray("Altaf"))  //boolean
console.log(Array.from({name:"Altaf"})) //{ name: "Altaf" } has neither an iterator nor a length property, so Array.from() cannot determine how many elements to create. It defaults to an empty array: [].

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))