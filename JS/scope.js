// js scope
// 1. function scope
// 2. global scope
// 3. block scope

// var
// global scope can access anywhere in js

var x = 10;
let a = 10; 
const b = 3; 
{
    console.log(x);  // x=10 here
    console.log(a);  // a=10
    console.log(b);
}

// variable declared outside function can become global scope

// function scope
let myFunc = () => {
    let name = 5;
    console.log(a);
}
console.log(name);  // not access becoz function scope

// local variable start with function start and delete when function close




