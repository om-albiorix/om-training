//normally Function
function myFunc() {

}
//annonymous function with store in variable
const x = function (a, b) {
    return a * b;
}
const z = x(4, 3)
console.log(z)
// constructor method
const myFunction = new Function("b", "a", "return a*b");
let y = myFunction(2, 3)
//function arguments passed
function myFunction(a, b) {
    console.log(a * b)
}
myFunction(3, 4)

//A function defined as the property of an object, is called a method to the object.
//A function designed to create new objects, is called an object constructor.

// if we passed parameter bt not pass argument then automatically take undefind
function paraMeter(a, b) {
    console.log(typeof a * b)
}
paraMeter(3);
//example of for loop with function
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sum(1, 2, 3, 4, 4, 5, 56, 6, 7));

//invoking function as function construtor
function myData(arg1, arg2) {
    this.fname = arg1;
    this.lname = arg2;
}

const myObj = new myData("Om", " Solanki")
console.log(myObj.fname + myObj.lname);

// call method

const man = {
    name: function () {
        return this.firstname + " " + this.lastname;
    }
}
const man1 = {
    firstname: "Meet",
    lastname: "Munjapara"
}
console.log(man.name.call(man1));


//bind method

const person = {
    firstName: "Om",
    lastName: "Solanki",
    fullname: function () {
        return this.firstName + this.lastName
    }
}
const myName = {
    firstName: "yash",
    lastName: " solanki"
}

let myFullname = person.fullname.bind(myName);
console.log(myFullname());
alert(person.fullname.apply(myName));


