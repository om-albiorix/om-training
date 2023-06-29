// it used to convert array to string
const myArr = [1, 3, 4, 5, 6, 6];
let y = myArr.join("");
console.log(typeof myArr);  // object
console.log(typeof y);  // string

// indexof returns index number of element
let x = [1, 2, 3, 4, 45, 5, 5];
x.indexOf(2);// it return position of x

// JSON.parse
// it convert string to object
const xy = '{"name":"John", "age":30, "city":"New York"}';
let yx = JSON.parse(xy);
console.log(yx.name)
console.log(xy)

// to stringify

