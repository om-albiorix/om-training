// for of iterate over array, string ,map etc..

const myArr = [1, 23, "om", "yash", 34];
let text = "";
for (let x of myArr) {
    text += x + "<br>";
}
console.log(text);

// string in also used for of array

const myString = "My Javascript";
let txt = "";
for (let x of myString) {
    txt += x;
}
console.log(txt);