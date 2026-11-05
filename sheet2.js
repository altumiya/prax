// let a = [1, 4, 3, 2, 6, 5];
// // console.log(a.sort((x, y) => x - y));
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//       if ( a[i] > a[j]){
//             let sort = a[i];
//             a[i] = a[j]
//             a[j]= sort
//         }
//     }
// }
// console.log(a)

// let a = [1,2,3,4,4,5,5,6,]
// for(let i=0;i<a.length;i++){
//    for(let j=i+1;j<a.length;j++){
//       if(a[i]===a[j]){
//         console.log(a[i])
//       }
//    }
//    }

// let amount = 2000
// let time = 2 
// let roi = 10
// let si = amount*time*roi/100
// let discount = 10
// if(discount>=0 && discount<=100 ){
//     console.log (si*discount/100)
// }
// else{
//     console.log("no discount")
// }

// let a = "Madam"
// let rev = a.split('').reverse().join("").toLowerCase()
// if (rev === a.toLowerCase()){
//     console.log("palindrome")
// }else{
//     console.log("not pal")
// }

// let a = 5
// let fact = 1
// for (let i=1;i<=a;i++){
//     fact = fact *i
// }
// console.log(fact)

// let a = 10
// let b = 0
// let c = 1
// for (let i=0;i<a;i++){
//     console.log(b);
//     let d = b+c;
//     b=c;
//     c=d;
     
// }

// let n = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(n, "x", i, "=", n * i);
// }
// let n = 1
// sum  = 0;
// for (let i = 1; i <= 100; i++){
//    // console.log(n, '+', i, "=", n + i)
//   sum += i
// }
// console.log(sum)

// let n = 1 
// let ev3rd = []
// for(let i=0;i<=30;i++){
//     if(i % 3 == 0){
//         ev3rd.push(i)
//     }
// }
// console.log(ev3rd)

// let n = 1
// for (let i=1;i<=10;i++){
//     console.log (i, "*", i, "=" , i * i)
// }

// let power = 1;

// for (let i = 1; i <= 10; i++) {
//     power = power * 2;
//     console.log(power);

// }

// let n = 1 
// for (let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0 ){
//         console.log("fizzbuzz")
//     }else if(i%3===0){
//            console.log("fizz")
//     }else if(i%5===0){
//         console.log("buzz")
//     }else{
//         console.log(i)
//     }

// }

// let n =1 
// for (let i = 1; i<=5;i++){
//     for (let j =1 ;j<=10; j++){
//         console.log(i, '*', j, "=" ,i * j)
//     }
// } 

// let sum = 0
// for (let i=0;i<=50;i++){
    
//     if(i%2 ==1){
//         sum +=i
       
//     }
// }
// console.log(sum)

// let str = "AEIOUSTICAEIOUS"
// let count = 0
// for (let char of str){
//     if("aeiou".includes(char.toLowerCase())){
//         console.log(char)
//         count ++
//     }
    
// }
// console.log(count)

// let a = [10,20,30,40,50]
// // a.sort((x, y) => x - y);
// console.log(a[a.length-2])

// let a = ["apple", "banana", "cherry", "blueberry"]
// let count = 0
// let target = ["a ","b"]
// for (let char of a){
//     for (let word of char){
//     if(target.includes(word)){
//         count ++
//     }
// }}
// console.log(count)