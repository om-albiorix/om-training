//how many types you can create object
//1.  object literal
const person = {
    name: "Om",
    lastName: "Solanki",
    greet: function () {
        console.log("hello");
    }
}
//2. constructor Function
function Person1(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city
}
const person1 = new Person1(name, age, city)
console.log(person1);

//factory fauntion crate object 

function createFunction(firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age
    };
}

const omData = createFunction("Sanket", "Solanki", 22);
console.log(omData);


function myFunction(age, text, arr) {
    console.log(arguments)
}
myFunction(12, "Om Solanki", [12, 14])