for (let i=1; i<=10 ; i++){
    console.log(`outer value of : ${i}`)
    for (let j=1; j<=10; j++){
    console.log(i + `*` + j +`=` +i*j)
    }
    
}

for (let i=1; i<=20 ; i++){
   if (i==5){
    console.log(`detected 5`)
    continue  //skips 5 as continue method is used to skips conditions
   }
   console.log(`value of i is ${i}`) 
}