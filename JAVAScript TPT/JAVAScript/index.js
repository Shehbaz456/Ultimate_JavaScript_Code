//1. ways to Print in JavaScript
// console.log("hello world")
// alert("me");
// document.write(" this is document write ");

//2. javascript console API
// console.log("HEllo world" ,5+6 ,"Another log");
// console.warn("this is warning ");
// console.error("this is an error");

//3. JavaScript varibles
//what are the Varible? - containers to store data values
// var number1 = 30;
// var number2 = 30;
// console.log( number1 + number2);

//4.Data types in js
//Numbers
// var num1 = 344;
// var num2 = 3.44;

// //strings
// var str1 ="hello this is string"
// var str2 ='this is string Shehbaz Khan'
// console.log(str2)

//Objects
// var Marks = {
//     ravi:34, 
//     ram: 88,
//     ShehbazKhan: 99.999
// }
// console.log(Marks)

//Booleans
// var a=true;
// var b=true;
// console.log(a,b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

/*
mult
line
comment
*/

/*
At a very high level, there are two types of data type in javascript
1. Primitive data types: undefined, null,number,string,boolean,symbol
2. Reference data types: arrays or objects 

*/
// // Array
// var arr = [1 , 2 , "shehbaz Khan" , 4 , 5];
// console.log(arr)


// Operator in javascript
// 1. Arithmatic Operator
// var a=40;
// var b=50;
// console.log("the value of a + b is ",a+b);
// console.log("the value of a - b is ",a-b);
// console.log("the value of a * b is ",a*b);
// console.log("the value of a / b is ",a/b);


// 2.Assignment operator
// var c=b;
// c+= 3
// c-= 3
// c*= 3
// c/= 3
// console.log(c);

// 3. comparison operator
// var x=34;
// var y=12;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);


//4.Logical Operator
//logical AND
// console.log(true && true);
// console.log(true && false);
// console.log( false&& true);
// console.log(false && false);

//logical OR
// console.log(true  || true);
// console.log(true  || false);
// console.log( false || true);
// console.log(false || false);

//logicaal NOT
// console.log(!false);
// console.log(!true);


//function in javaScript
// function avg(a,b){
//     return (a+b)/2;
// }
// DRY = Do not repeat yourSelf;
// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1,c2);

// coditional in Javascript
// var age = 34;
// if(age>18){
//     console.log('you Can drink water');
// }
// else{
//  console.log('you are a Kid' )
// }

//if-else ladder
// age=32
// var age = 34;
// if(age>32){
// console.log('you Can drink water');
// }
// else if(age >26){
//   console.log('you can Drink ' );   
//   console.log('Bachhe nhi rahe ' );   
// }
// else if(age >16){
//   console.log('you can Drink  DDDDOOO' );   
//   console.log('YES Bachhe nhi rahe ' );   
// }

// console.log("End of ladder ");

// age=30;
// function pena(age) {
//   if(age>13){
//   console.log('you can Drink RASNA Water ');
//   }else{
//    console.log('you can NOT Drink RASNA Water ');
//   }
// }



// var arr = [1, 2, 3, 4, 55, 6, 7];
// // console.log(arr);
// for(var i=0;i<arr.length;i++){
//   if(i==2){
//     // break;
//     continue;
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })

// const ac = 0;
// ac++;
// ac = ac + 1;

// let j = 10;
// while (j<arr.length){
//   console.log(arr[j]);
//   j++
// }

// do{
//     console.log(arr[j]);
//     j++
// }while(j<arr.length);




let myarr=["Fan","Camera",34,null,true];
//Array Method
// console.log(myarr.length);
// myarr.pop();                 //remove your last element
// myarr.push("Shehbaz");
// myarr.shift();               // remove your first element
// myarr.unshift("Shehbaz");       //add element in 0 index in arr
const newLen = myarr.unshift("Shehbaz");         
console.log(newLen);                 
console.log(myarr);
// console.log(myarr.indexOf(null));
// console.log(myarr.toString());
// console.log(myarr.join("--"));
// console.log(myarr.push("hello moto"));
// console.log(myarr.delete());
// for (let i = 0; i < myarr.length; i++) {
//     delete myarr[i];
// }
// console.log(myarr);
// explor array


//String Method in JAVASCRIPT

// let mylivelyString = "SAM is a good good boy"
// console.log(mylivelyString.length);
// console.log(mylivelyString.indexOf("good"));
// console.log(mylivelyString.lastIndexOf("good"));

// console.log(mylivelyString.slice(0,5));   //start 0,end 5
// d= mylivelyString.replace("SAM", "Harry");
// // d= d.replace("good","bad")
// console.log(d,mylivelyString);




























// oops basic
// class hello{
//     constructor(name,role){
//         this.name=name;
//         this.role=role;
//     }
//     collecteddata(){
//         console.log("your name is :",this.name);
//         console.log("your role is :",this.role);
//     }
// }
// let username = new hello("shehbaz","js developer");
// username.collecteddata()
