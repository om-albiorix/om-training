let x = 999999999999999;
// javascript are accurate with only 15 digit

//how can create big int
// variable append add n to create big int
let y = 9999999999999999n
console.log(y);

// u can also doing this

let bigintnumber = BigInt(9999999999999999);
console.log(typeof bigintnumber);


//bigint and number are not arithmatic so convert into number
let numeric = 10n
let numeric1 = 20;
console.log(Number(numeric) / numeric1);
console.log(Number.isInteger(numeric1)); // return true
console.log(Number.isSafeInteger(numeric1)); // return true


let xy = Number.MIN_SAFE_INTEGER;
console.log(xy); // return negative value bigint;

let yz = Number.MAX_SAFE_INTEGER;
console.log(yz);  // returun positive big int


