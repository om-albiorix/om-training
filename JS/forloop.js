// loop can execute block of code number of times
let myNumber = Infinity;
for (let i = 0; i < myNumber; i++) {
    console.log(myNumber);
}

// beetwen range check it is odd or even 
for (let i = 0; i <= 10; i++) {
    let text = "";
    if (i % 2 == 0) {
        text = i + "it is an even"
    } else {
        text = i + "it is an odd number"
    }
    console.log(text);
}

// array in loop

const myArr = ["company", "corporate", "politics", "event", "aprisal"];
let aboutCompany = "";
for (i = 0; i <= myArr.length; i++){
    aboutCompany += myArr[i] + "<br>"; 
}
console.log(aboutCompany);


