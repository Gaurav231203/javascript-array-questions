// use  .every( )to check if all number are even;
let arr =[2,4,6,8,10];
 let evenarr=arr.every((val)=>
{
    return val%2===0;

})
console.log(evenarr)