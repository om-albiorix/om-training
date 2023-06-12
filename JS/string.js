// string method

// 1.length method

const mystr = "OmSolanki";
mystr.length;
console.log("forlength", mystr.length);

//2. slice method extract string from using parameter and single parameter use ans that to start brack

const mystrSlice = "Om,Yash,Divy,Taksh";
mystrSlice.slice(7, 13);
console.log('strSlice', mystrSlice.slice);

//3. substring is similar to slice

//4.substr is also similar to slice the difference is that the second parameter specifies the length of the extracted part

//5. replace
let replace = "my name is suraj";
let replacedname = replace.replace("suraj", "om");
console.log(replacedname);

//6 replace all
let mynamechange = "om is good.om doing a good coding practise";
let changedname = mynamechange.replaceAll("om", "yash")
console.log(changedname);

// touppercase
let uppercaseName = "omsolanki";
let upnamed = uppercaseName.toUpperCase();
console.log(upnamed);


// lowercase is same as upper case
let lowercaseName = "DHARI";
let lowernamed = lowercaseName.toLowerCase();
console.log(lowernamed);

// concatination

let text1 = "Om";
let text2 = "Solanki";
let text3 = text1.concat(" ", text2);
console.log(text3);

//trim
let trimword = "    nsdfj    ";
let trimingword = trimword.trim();
console.log(trimingword);

// trimstart and trimend same as trim method

//padstart and padend method

let x = "5";
let y = x.padStart('5', '7');
console.log(y)

//padend
let o = "5";
let b = o.padEnd('5', '7');
console.log(b)

// split method
//split can string convert into array

let stri = "a,b,c,d,f";
let striarry = stri.split("|");
console.log(striarry);

//

