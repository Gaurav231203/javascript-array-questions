// use .filter() to keep numbers greater then 10;

let arr=[5,6,7,10,56,3,4,6,22,77,88,11];
let newarr = arr.filter((val)=>{
    return (val>10);
});
console.log(newarr);