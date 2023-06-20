// comparision operators

let x = 5;
console.log(x == 8); // return false
console.log(x == 5); // return true
console.log(x == "5"); // return true  // only check value
console.log(x === "5"); // return false // check value and types

console.log(x != 8); // return true 
console.log(x !== 5); // return false // check  value and types are not same / but here same

// &&  Operators
// && operators if both condition are true then return true
// if both condition are false then false

let g = 5; h = 5;
(g > 1 && h < 14) ? text = "ok!" : text = "not ok!";
console.log(text);  //here  return ok becoz both condition are true

// || (or or Operators)
// || operators in if one condition are true than output are true
(g > 1 || h < 4) ? text = "true" : text = "false";
console.log(text);
// return true becoz one conditon are true

// ! operators check value are does not match

let name = "om";
let surname = "Solanki";

console.log(!(name == surname));  // return true



// ternary operators
//ternary operators are work like if else condition 
let age = 30;
let voteable = (age < 18) ? "u r not eligable" : "u r eligible";
console.log(voteable);

//diff  data types with comparision are unexpected result

// ??  nullish operator  
let things = null;
let text = "om";
console.log(things ?? text);  // nullish operator check if left part are null then return right part

// ?. optional chaining  // not value return then throw err

let myObj = {
    fname: "hardiksir",
    lname:"thakkar"
}
console.log(myObj?.fname);

