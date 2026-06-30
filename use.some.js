//use .some() to check if any number is bewlow then 40;
let arr=[10,40,50,6,77,88,];
 let less =arr.some((val)=>{
    return val<10;
})
console.log(less);