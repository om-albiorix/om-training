const myObj = {
    company: 'albiorix',
    stregth: 100,
    Location: "ahemdabad"
}
let text = 0;
for (let x in myObj) {
    text += myObj[x] + " ";
}
console.log(text);