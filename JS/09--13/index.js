let x = 10;
function foo() {
    console.log(x);
}
function bar() {
    let x = 20;
    foo();
}
bar();
//
var x = 10;
function hoistingExample() {
    console.log(x);
    x = 20;
}
hoistingExample();
//var x = 10;
function hoistingExample() {
    console.log(x);
    var x = 20;
}
hoistingExample();