// close example declare outside function can use inside function

let a = 20;
function myFunction() {
    console.log(a)
}
// onclick counter
let counter = 0
function myFunc() {
    counter += 1
}
myFunc();
console.log(counter)
//
function add() {
    let count = 0
    function adding() {
        count += 1
        document.getElementById("result").innerHTML = count;
    }
    adding()

}
add();

