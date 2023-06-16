let user = {
    name: "om",
    age: '21',
    city: 'dhari'
};
console.log(user(key, value));

//object in output using forin loop 

; let text = "";
for (let x in user) {
    if (user[x] == 21) {
        user[x] = 'omsolanki'
    }
}
console.log("object", user);

//call by reference example

let user2 = user;
user2.name = "YashSolanki";

console.log(user);
console.log(user2);

//call by value example

let name = "nnmm";
let name2 = name;
name2 = "jd";
console.log(name, name2);
