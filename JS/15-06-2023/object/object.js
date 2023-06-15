const person = {
    firstname: "Om",
    lastname: "solanki",
    age: 21
}

// remove property from object
const myObject = {
    name: "om",
    age: 10,
}
myObject.age = 20;
delete mybject.name;
console.log(myObject);

const myCard = myObject;
myCard.age = 23;
console.log(myCard.age);

// add item in object

person.nationality = "indian";
console.log(person);


// obejct nested

const companyData = {
    name: 'tcs',
    rank: 100,
    brach: {
        gujrat: 1,
        maharastra: 2
    }
}
console.log(companyData.brach.maharastra);

// array in object
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
//property access in array in obejct
console.log(myObj.cars[0].models[2]);

// example obj by function
const myname = {
    unword: "dsvsdv",
    lang: "eng",
    obj: function () {
        return this.unword + this.lang + "this is information";
    }
}
console.log(myname.obj);

//object tostrigify

const myName = {
    name: "Om",
    surname: "Solanki"
}
console.log(typeof myName)

const json = JSON.stringify(myName)

console.log(typeof json);   

