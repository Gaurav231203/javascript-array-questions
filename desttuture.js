/* destructring is a feature of javascript which allows us to unpack values from arrays or 
 properties from objects into distinct variables. It makes it easier to extract data from arrays and objects.*/
// destructure this aray to get fitst and last number
 let arr=["gaurav","saurabh","prashant","sandeep"];
 let [firstname, , , lastname]=arr;
 console.log(firstname);
 console.log(lastname);