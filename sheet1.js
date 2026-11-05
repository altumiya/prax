//let a = [1,3,4,5,6,77,]
//let sum = 0
//for(let i=0; i<a.length; i++){
//    sum += a[i]
//}
//console.log(sum) 96
//const b = a.reduce((sum, value) => sum + value, 0)
//console.log(b)
// let largest = a[0]
// for (let i = 1; i < a.length; i++) {
//     if (a[i] > largest) {
//         largest = a[i]
//     }
// }
// console.log(largest) 77
// let smallest = a[0]
// for (let i = 1; i < a.length; i++) {
//     if (a[i] < smallest) {
//         smallest = a[i]
//      }
// }
// console.log(smallest) 1
// let sum = a[0]
// for (let i = 1; i < a.length; i++){
//     sum += a[i]
// }
// let avg = sum/a.length
// console.log(avg) //16
//for (let i = 0; i < a.length; i++){
    // let b = a.map((v,i)=>({   [
//   { v: 1, i: 0 },
//   { v: 3, i: 1 },
//   { v: 4, i: 2 },
//   { v: 5, i: 3 },
//   { v: 6, i: 4 },
//   { v: 77, i: 5 }
// ]
    //     v,i
    // }))
    // console.log(b)
//}
// let remaining = []
// let b = []

// for (let i = 0; i < a.length; i++) {
//     if (i === 2) {
//         b.push(a[i])
//     } else {
//         remaining.push(a[i])
//     }
// }

// a = remaining
// console.log("Remaining:", a) // Remaining: [ 1, 3, 5, 6, 77 ]

// console.log("Moved:", b)// Moved: [ 4 ]
// let newa = []

// for (let i = 0; i < a.length; i++) {
//     if (i === 3) {
//         newa.push(2)
//     }
//     newa.push(a[i])
// }

// console.log("Original:", a)
// console.log("After insertion:", newa)

// let even= []
// let odd = []
// for (let i = 0; i < a.length; i++){
//     if(i%2==0){
//         even.push(a[i])
//     }
//     else{
//         odd.push(a[i])
//     }
// }
// console.log(even)[ 1, 4, 6 ]
// console.log(odd)[ 3, 5, 77 ]
// let rev = []
// for (let i=a.length-1; i>=0;i--){
//     rev.push(a[i])
// }
// console.log(rev) [ 77, 6, 5, 4, 3, 1 ]

// let a = [1,3,4,5,6,77,-22,-34]
// let posiv = []
// let negv = []
// for(let i = 0; i < a.length; i++ ){
//     if(a[i]>0){
//         posiv.push(a[i])
//     }
//     else{
//          negv.push(a[i])
//     }
// }
// console.log(posiv)
// console.log(negv)
//  a.splice(2,1)
//  a.splice(4,1)
// console.log(a) //[ 1, 3, 5, 6 ]
// a.splice(5,1)
// console.log(a)[ 1, 3, 4, 5, 6 ]
// a.splice(0, 2)
// console.log(a) 
//  a.splice(4,1)
// console.log(a) //[ 1, 3, 5, 6 ]
// a.splice(5,1)
// console.log(a)[ 1, 3, 4, 5, 6 ]
// a.splice(0, 2)
// console.log(a) [ 4, 5, 6, 77 ]

// let a=[-3, 5, -7, -3, 2, -1, 8, 10]
//  let posiv = []
// for(let i=0;i<a.length;i++){
//     if (a[i]>0){
//         posiv.push(a[i])
//     }
   
// } 
// console.log(posiv) 
// }
// console.log(posiv)[ 5, 2, 8, 10 ]
// for (let i=a.length-1; i>=0;i--){
//     if(a[i]<0){
//     a.splice(i,1)
//     }
// }
// console.log(a) [ 5, 2, 8, 10 ]
// let a =[1, 2, 3, 4, 5, 6, 7, 8, 9]

// let a1 = a.slice(0,3)
// let a2 = a.slice(3,6)
// let a3 = a.slice(6,9)

// console.log(a1) 
// let a =[1, 2, 3, 4, 5, 6, 7, 8, 9]

// let a1 = a.slice(0,3)
// let a2 = a.slice(3,6)
// let a3 = a.slice(6,9)

// console.log(a1)
// console.log(a2)
// console.log(a3) [ 1, 2, 3 ]
// console.log(a2) [4,5,6]
// console.log(a3) [7,8,9]
// let a = [1, 2, 3]
// let b = [4, 5, 6]

// for (let i = 0; i < b.length; i++) {
//     a.push(b[i])
// }
// console.log(a)

// let a = [1,2,3]
// let b = [4,2,3]
// for (let i=0;i<a.length;i++){
//     if(a[i]==b[i]){
//         console.log("equal")
//     }else{
//         console.log("not equal")
//     }
// }not equal
// equal
// equal

// let a = [1,2,3]
// let b = [4,2,3]
// let union = []

// for (let i=0; i<a.length;i++){
//     if(!union.includes(a[i])){
//          union.push(a[i])
//     }
// } 
// for (let i=0; i<b.length;i++){
//     if(!union.includes(b[i])){
//          union.push(b[i])
//     }
// }
// console.log(union) [1,2,3,4]

// let a = [1,2,3]
// let b = [4,2,3]
// let diff = []

// for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//         diff.push(a[i])
//     }
// }
// for (let i = 0; i < b.length; i++) {
//     if (!a.includes(b[i])) {
//         diff.push(b[i])
//     }
// }
// console.log(diff)[1,4]

// let a =[[1,2],[3,4],[5,6]]
// let b = []
// for (let i = 0; i < a.length; i++){
//     for(let j=0; j< a[i].length;j++){
//         b.push(a[i][j])
//     }
    
// }
// console.log(b) [1,2,3,4,5,6]
let a = ["apple", "banana", "cherry", "blueberry"]
// function longstr(arr){
//     let longest = '';
//     for (let element of arr){
//         if(element.length>longest.length){
//             longest = element;
//         }
//     }
//     return longest;
// }
// console.log(longstr(a)) blueberry
// let longest = []
// for (let element of a){
//     if(element.length>longest.length){
//         longest=element
//     }
// }
// console.log(longest) blurberry
// let result = ''   //a.join("")
// for (let i=0;i<a.length;i++){
//     for (let j=0; j<a[i].length;j++){
//         result +=a[i][j]
//     }
// }
// console.log(result) applebananacherryblueberry
// a.splice(2,2)
// console.log(a) ["apple", "banana"]
//console.log(a.slice(1,4)) [ 'banana', 'cherry', 'blueberry' ]

// for (let i=0; i<a.length;i++){
//     if(a[i].length<=5){
//         a.splice(i,1); // remove 1 element at a time
//         i--  //prevents skipping the next element after removal.
//     }
// }
// console.log(a)