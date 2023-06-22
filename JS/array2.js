// array method

// length

const points = ["om", "yash", "kishan", "meet"];
points.length; // return 4
console.log(points);


// join 

console.log(typeof points.join("*"));  // return string

// push 

console.log(points.push("taksh"));  // return new array legnth

// pop 
console.log(points.pop());

// concat method

const newArray = [1, 2, 3, 4];
const new2Array = ["albiorix", "tcs", "simform"];
console.log(newArray.concat(new2Array));

// flat method
// return new array with concat subarray;

const myArray = [[1, 3], [1, 4], [15]];
console.log(myArray.flat());
