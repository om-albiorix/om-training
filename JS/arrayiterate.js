//foreach method

const myArray = [1, 4, 2, 7, 9, 4];
let text = "";

const myFunc = (value, index, array) => {
    text += value
};
myArray.forEach(myFunc);
console.log(text);  // return value

// map examples


const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return { value: value * 2, index: index * 2 };
}

console.log(numbers2);

const singleNum = [1, 4, 9];
singleNum.map((num) => num * num);
console.log(singleNum);


// filter  method
const myArr = [1, 23, 12, 56, 43, 112, 23, 98, 1];
let bigEle = myArr.filter((element) => element > 10);
console.log(bigEle);

// 2nd method to do filter mathod
const myArr1 = [1, 23, 12, 56, 43, 112, 23, 98, 1];
const myArrEle = myArr1.filter(myFunc);
function myFunc(value, index, array) {
    return value > 15;
}

console.log(myArrEle);


// reduce method gives output into single value;
// REDUCEright does not change original array

const mySumArray = [12, 12, 1, 2, 12, 21];
let mySum = mySumArray.reduce(mySumFunc);
function mySumFunc(sum, value) {
    return sum + value;
}
console.log(mySum);

// every 
// pass and check and take test and check

const myTestarr = [1, 2, 3, 4, 5, 3, 12, 12, 12, 45, 55, 45, 45];

const myFunction = (value) => value > 8;
let everytet = myTestarr.every(myFunction);
console.log(everytet);

//some


// check somevalues are satisfy with condsition;
const mySomearr = [1, 2, 3, 4, 5, 3, 12, 12, 12, 45, 55, 45, 45];

const myFunction = (value) => value > 8;
let sometet = mySomearr.some(myFunction);
console.log(sometet);

// indexof
// check search element in array return its position
// if items are not found then it returns -1

const myIndexArr = ['Oreo', 'Parle-g', 'bourbon', 'hidensick', 'milano'];
let myIndexArrposition = myIndexArr.indexOf("parle-g");
console.log(myIndexArrposition);

// findindex
// findindex return index of last item
const myFindindex = [1, 4, 9, 16, 25, 36, 49, 81, 100];
let findIndex = myFindindex.findIndex(myFindIndexFun);
function myFindIndexFun(value) {
    return value > 16;
}
console.log(findIndex);

// from() method 
// it return array
let myaRR = Array.from("dfnsjnvjnjrnjnjnjawnfjvn");
console.log(myaRR);

// spread Operator
// copy object of one to other 
const firstarr = [1, 2, 3, 4, 4, 4];
const secondarr = [1, 2, 3, 4, 5, 6];
const mergearr = [...firstarr, ...secondarr];
console.log(mergearr);

// includes check element present in array
// return in boolean 
const fruits = ["mango", "apples", "kiwi", "Banana", "Orange"];
fruits.includes("Orange");
console.log(fruits);

// javascript entries

const fruitsitem = ["mango", "apples", "kiwi", "Banana", "Orange"];
const f = fruitsitem.entries();
for (let x of f) {
    console.log(x)
}

// javascript keys
const itCompany = ["simform", "tcs", "Bacancy", "Albiorix"];
let keys = itCompany.keys();
let text1 = "";
for (x of keys) {
    text1 += x + "<br>"
}
console.log(text1);


