// normal function
function showMessage() {
    alert("hello")
}
showMessage();

// outer variable can access
let name = "hello";
const myFunc = () => {
    let myname = "Om" + name;
    console.log(myname);
}
myFunc();

// outer variable can access and modified it

let age = 20;
const myAge = () => {
    console.log("ageold", age);
    age = "22";
    console.log(age, "agemodi")
}

myAge();

// make same name variable and inside priority greater than inner

let fname = "solanki";

const myFname = () => {
    let fname = "Patel";
    console.log("fnameinside", fname);
}
console.log("fnameoutside", fname)
myFname();

// parameter in function


function myPractiseFunc(age, city,arr) {
    console.log(age + "        " + city +" "+ arr[0]);
    
}
myPractiseFunc(21, "dhari", [1, 3, 3, 4]);

