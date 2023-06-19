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


// splice ----- add new item into array & remove item of array check below example
// slice ---- remove item from array;

let spliceMethod = ["albiorix", "openExcel", "tcs"];
spliceMethod.splice(1, 1, "Adeptdigital");
console.log(spliceMethod); // it returns  [ 'albiorix', 'Adeptdigital', 'tcs' ]
spliceMethod.splice(1, 1);
console.log(spliceMethod);

// splice another example

const mentorAlbiorix = ["Parag", "Meet", "Darshan", "jaydeep"];
mentorAlbiorix.splice(0, 3, "Renishbhai");
console.log(mentorAlbiorix);

// splice method in also add without reomve element

mentorAlbiorix.splice(2, 0, "Nitin", "Dhaval");
console.log(mentorAlbiorix);
// ['Parag', 'Meet', 'Nitin', 'Dhaval', 'Darshan', 'jaydeep']

// -----------------slice method

// example of splice and slice b/w diff
var array = [1, 2, 3, 4, 5];
console.log(array.splice(2));

//slice
var array2 = [1, 2, 3, 4, 5]
console.log(array2.slice(2, 'efee'));


console.log("----after-----");
console.log(array);
console.log(array2);

// foreach for aryray
let foreachArray = ["ahemdabad", "jamanagar", "BARODA", "SURAT"];
foreachArray.forEach((item, index, array) => { alert(`${index}`) }
)

// indexof lastindexof incldes examples

const findinArray = ["meet", "rahul", "rohit", "jalpesh"];
console.log(findinArray.includes("meet")); // is present in array
console.log(findinArray.indexOf("meet")); // index number in array
console.log(findinArray.lastIndexOf("meet")); // lastindex number in array

// array of object example

const employeeData = [
    { id: 1, name: "om" },
    { id: 2, name: "jaydeep" },
    { id: 3, name: "meet" }
]
let dataFounded = employeeData.find(item => item.name == "JD ");
console.log(dataFounded);

// findindex method
// if element is not present in array then return -1

console.log(employeeData.findIndex(item => (item.name == "jalpesh")));


// find lastindexof
// if element is not present in array then return -1

console.log(employeeData.findLastIndex(item => (item.name == "om")));

//filter method
//find method work at only single value if we want find multi value then filter method many item return
const userData = [
    { id: 1, name: "om" },
    { id: 2, name: "jaydeep" },
    { id: 3, name: "meet" }
]
let someUserData = userData.filter(item => item.id < 3);
console.log(someUserData);

// example callback
debugger;
function myFunction(some) {
    console.log("ffun", some);
};

function sumFunc(num1, num2) {
    let result = num1 + num2;
    myFunction(result);
};

sumFunc(1, 3);
sumFunc(500, 1000);



// map method
// array map method call for each element of array and returns the result of array

let mapFunction = ["om", "yash", "kishan", "dhruv"];
mapFunction.map(item => item.length);
console.log(mapFunction);
