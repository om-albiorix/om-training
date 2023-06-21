// number to string convert for used toString();

let x = 123;
let y = x.toString();
console.log(typeof x.toString());
console.log(typeof y);

// Exponential
// return as string and exponential number
let a = 1.256;
console.log(typeof x.toExponential(2)); // 1.25e +0
console.log(typeof x.toExponential(4)); // 1.2500e +0
console.log(typeof x.toExponential(6)); // 1.250000e +0

// toFixed();
// return decimal answer and if use parameter then digit of answer
let xz = 9.556;
console.log(x.toFixed());  // 10
console.log(x.toFixed(2));  // 9.56
console.log(x.toFixed(4));  // 9.5600

//precision()
// it used to precise our number

let ab = 1.321;
console.log(ab.toPrecision());  // 1.321
console.log(ab.toPrecision(2));// 1.3
console.log(ab.toPrecision(3));// 1.32
console.log(ab.toPrecision(6));// 1.32100

// valueof 
let p = 123;
console.log(x.valueOf())
console.log((123).valueOf())
console.log((100 + 23).valueOf())

//  number method are convert javascript varialbe to number

console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number("    22    "));  //22


// parseInt return number of first spaces are allowed
console.log(parseInt("-10,02"));  // -10
console.log(parseInt("-10.02")); // -10

// parsefloat return number of floating 
console.log(parseFloat("-10,02"));  // -1
console.log(parseFloat("-10.02"));  // -10




