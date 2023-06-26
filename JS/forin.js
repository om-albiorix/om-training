// forin loop through properties of object

const myObj = {
    name: "vishal",
    std: "10th fail"
}
let text = "";
for (let x in myObj) {
    text += myObj[x]
}

console.log(text);

// in array used of for in loop


const myNumarr = [1, 4, 7, 3, 4, 98];
let numPrint = "";
for (let x in myNumarr) {
    numPrint += myNumarr[x] + "<br>";
}
console.log(numPrint);

