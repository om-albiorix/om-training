// foreach method
const numbers = [12, 12, 12, 32, 4, 3, 54, 54, 54];
let printNum = "";
numbers.forEach(myFunc);
console.log(printNum);
const myFunc = (value) => {
    printNum += value;
}



