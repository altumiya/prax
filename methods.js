const mynums = [1,2,3,4,5,6,7,8,9]
const nums = []
mynums.forEach((num)=>{
    if (num>4){
    nums.push(num)
    }
})
console.log(nums)

const mynum = [1,2,3,4,5,6,7,8,9]
const newnums = mynum.filter((num)=>{
    return num >4
})
console.log(newnums)

const mynums1 = [1,2,3,4,5,6,7,8,9]
const newnums1 = mynums1.map((nums)=>nums + 10 )
                      .map((nums)=>nums - 1)
                      .map((nums)=> nums / 4)
                      .map((nums)=> nums * 5)
                      .map((nums)=> nums**2)
                      .filter((nums)=> nums >=200)
console.log(newnums1)


const mynums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initial = 0;
const newnums2 = mynums2.reduce((a, c) => {
    console.log(`a : ${a} and c : ${c}`);
    return a + c; 
}, initial);

console.log(newnums2);


const cart = [
    {
        itemname : "soap",
        price : 400
    },
     {
        itemname : "oil",
        price : 700
    },
     {
        itemname : "sapionin",
        price : 300
    },
     {
        itemname : "ghee",
        price : 1400
    }
];
const finalt =cart.reduce((acc,item)=>acc + item.price,0)
console.log(finalt)