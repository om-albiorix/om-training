//find arrray length

const myArray = ['kira', 'adept', 'albirox', 'tcs', 'wipro'];
let myarrlength = myArray.length;
console.log('arraylength', myarrlength);

//array to string  method

let myarrstring = myArray.toString();
console.log(myarrstring);

// join method to array to string
let jointostring = myArray.join("*");
console.log(jointostring);
console.log(typeof myArray);
console.log(Array.isArray(myArray));

//pop method remove element from array
let poparray = myArray.pop();
console.log("popelement", poparray);
console.log(myArray, "newarrayofpop");

//push method add element in Array
// const myArray = ['kira', 'adept', 'albirox', 'tcs', 'wipro'];
let pushArray = myArray.push("ncdvv");   // push method gives you array length
console.log('push element in array', myArray); //it return a new array

//arrray shift method
//  array shift remove first element of array
// it working same as pop method pop method remove remove last element of array and shift remove first element of array

let shiftarray = myArray.shift();
console.log('shiftarray', shiftarray); // return value of remove element
console.log(myArray, "shiftarray");

// unshift method
// add new element on array

let unsiftarray = myArray.unshift('cycle');
console.log("unshifted array", unsiftarray); // gives a new length
console.log("new array after unshift", myArray); // gives new array after unshift

// changing element using index number

myArray[0] = "Bhaveshbhai Solanki"; // changing elemnt of 
console.log(myArray);

// if using delete array gives undefind
// so use of push() & pop();

delete myArray[0]; // it gives undefind

// without using push append element

myArray[myArray.length] = "kiwi";
console.log();

// two arrry are to doing merge


const myArray2 = ["dog", "monkry", "ccmds"];
let mergedarr = myArray.concat(myArray2)
console.log('mergedarr length', mergedarr.length);
// using concat method any arguement take for concat;
const yourarr = [1, 2, 3, 4, 5, 6, 7];
const newarr = [12, 3, 3, 4, 4, 4, 4, 54, 5];
let multimerged = myArray.concat(myArray2, yourarr, newarr);
console.log(multimerged.length, "multimerged arr length");
console.log(multimerged, "multimerged")

// you can also add arr value;
const newarr2 = [12, 3, 3, 4, 4, 4, 4, 54, 5];
let addelemt = newarr2.concat(1);
console.log(addelemt, "add element using concat");


// flat method return in single arr of concat of depth; see in below example;

const flatarr = [[1, 2], [12, 13]];
let applyflat = flatarr.flat();
console.log(applyflat, "flatarr");


// splice ----- add new item into array;
// slice ---- remove item from array;
