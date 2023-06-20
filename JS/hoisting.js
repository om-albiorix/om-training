// hoisting is default behavior js of moving declaration on the top

// let const

x = 23;
let x;
console.log(x);  // reference err becoz used before declare;

// const
// cannot redeclare  and not reassign

// hoisting example
let xy = 5;
let yz;

console.log(xy + " " + yz);  // yz return undefind becoz of intilize after use
yz = 20;


// const

companyName = "Albiorix";
// const companyName;  // error syntax err
