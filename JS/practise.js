// function practise
//  1 . normally function

function myFunction(a, b) {
    return a * b;
};

console.log(myFunction(2, 3));

// 2. arrow function\

const myName = (a, b) => {
    a * b
};
// object

const myObj = {
    name: "Om",
    position: "trainee software engineer",
    language: "react JS"
};
//property access in object;
console.log(myObj.position);



const myData = {
    firstName: "Om",
    lastName: "Solanki",
    Age: 21,
    getfullname: function () {
        return this.firstName + " " + this.lastName;
    }
}
alert(myData.getfullname())

