document.getElementById("demo").style.color = "red";
// you can change the text of element

document.getElementById('demo').innerHTML = "Albiorix"
let y = document.getElementsByClassName("name");
// document.getElementById("demo").innerHTML = y

// showing date using js

document.getElementById('demo1').innerHTML = "date" + Date();
const myFormSub = () => {
    let x = document.forms["myform"]["email"]["password"].value;
    console.log(x)
    if (x == "") {
        alert("please must field");
        return false;
    }
}


function onChangeEvent() {
    let x = document.getElementById("demo4");
    x.value = x.value.toUpperCase()
}

document.getElementById("displayDate").addEventListener("click", displaydate);
function displaydate() {
    document.getElementById("watchme").innerHTML = Date();
}