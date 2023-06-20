let x = 5;
if (x > 3) {
    if (x > 10) {
        if (x > 23) {
            console.log("to bigg than 23");
        } else {
            console.log("b/w 10 to 23");
        }
    } else {
        console.log("b/w 3 to 10");
        if ("b/w 3 to 10") {
            console.log("good");
        } else {
            console.log("notgood");
        }
    }
} else {
    console.log("below 3");
}

let y = 5;
y > 3
    ? y > 10
        ? y > 23
            ? console.log("to bigg than 23")
            : console.log("b/w 10 to 23")
        : console.log("b/w 3 to 10")
            ? console.log("good") : console.log("not good")
    : console.log("below 3");
