// arrow function

// syntax
const myName = (a, b) => { a + b }
myFunc()

//normal function  syntax
function myFunc(a, b) {
    return a * b
}
myFunc()

//example   
let age = prompt("what is your age ?")
let welcome = (age < 18) ?
    () => alert("hello") :
    () => alert("greetings!")
welcome();

// normal function

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
//  ||
//  
//convert into arrow function

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
    "do you agree?",
    () => console.log("you agreed"),
    () => console.log("you interpreted excecution")
);

    