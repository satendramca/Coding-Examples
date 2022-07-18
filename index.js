//  var vs let vs const
// Scope

// Global scope variable

var a = 10;

// console.log(a);

// Block scope variable
{
    let b = 15;
    const c = 5;
    // console.log(b);
}

// Variable shadowing

function test(){
    let a = "Hello";

if(true) {
    let a = "Hii";
    // console.log(a);
}
// console.log(a);
}
test();

// illegal shadowing

// function test(){
//     var a = "Hello";
//     let b = "byee";


// if(true) {
//     let a = "Hii";
//     var b = "Goodbye"
//     console.log(a);
//     console.log(b);
// }
// }
// test();

// Declaration
// var is redeclare in the same scope
var a;
var a;

// let and const we are not redeclare in the same scope
// let a;
// let a;

// const d;
// const d;

// Declaration without initialisation
// var a;
// let g;
// const is not declare without any value
// const j;
const j = 3;

// Re-Initilisation
// var and let can be updated but const never be update
// var a = 10;
//  a = 20;

//  let d = 11;
//  d = 12;

//  const b = 13;
//  b = 14;
//  Function in JavaScript 
//   Q.1 What is Function Declaration ?
// function square(num){
//     return num*num;
// }

// Q.2 What is Function Expression?
// const square = function(num){
//     return num*num;
// }; 
// console.log(square(5));

// Q.3 What is the First Class functions ?

function square(num){
    return num*num;
}
function displaySquare(fn){
    // console.log("square is " + fn(5));
}
displaySquare(square);

// Q.4 What is IIFE(Immediately invoke function expresion) ?

// (function square(num){
//     console.log( num*num);
// })(5)

// IIFE O/P based Q?
// (function (x) {
//     return (function  (y) {
//         console.log(x);
//     })(2);
// })(1);

// Q.5 Arrow function
// this is normal function 
const addx = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

// this is arrow function
const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

// Differance b/n Arrow function vs Regular function ?

// 1. syntax
// Regular function syntax
function square(num){
    return num * num; //normal return keyword
}
// Arrow function syntax
const squareArrow = (num)=>{
    return num * num;
}

// 2. Implicit return keyword in arrow function
const squareArr = (num) => num * num;

// 3. Arguments
function fn(){
    console.log(arguments)
}
// fn(1,2,3);
// arguments in arrow function
const fnArr = () =>{
    // console.log(arguments);
};
// fnArr(1,2,3);

// 4. 'this' keyword


// Object in JavaScript
const user = {
    name: "satendra",
    age:"27"
}

user.name = "sanjay" // modify this name in object
delete user.age; // delete property
// console.log(user);
// console.log(user.name);


// hoisting
var x; // Declare the variable
a = 5; // assign the value 
// console.log(a);


