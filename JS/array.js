// Array special variable acn hold more than one value;
// array example

let arr = ["Om", "meet", "nitin", "parag"];
console.log(arr);

// you can also create array like this
let myarr = [];
myarr[0] = "om";
myarr[1] = "yash";
myarr[2] = "kishan";
console.log(myarr);

// array create using 
const cars = new Array("alto", "kia", "bmw");
console.log(cars);

//accessing array elements

console.log(cars[0]);

// changing array element
cars[0] = "g-wagon";
console.log(cars);

// toString method

const fruits = ["apple", "mango", "kiwi"];
let stringto = fruits.toString();  // given in string;
console.log(typeof stringto);
console.log(typeof fruits);

// to find length of array ;
// length always give +1 to index number
console.log(fruits.length);

// find first element in array

let fruit = fruits[0];
console.log(fruit);

// last element of array find


// using loop print array in list item 
let fruitlast = fruit.length - 1;
console.log(fruits[fruitlast]);

const food = ['pizza', 'puff', 'vadapav', 'frenchfries'];
let fl = food.length;
let text = "<ul>";

for (let x = 0; x < fl; x++) {
    text += "<li>" + food[x] + "</li>";
}
text += "</ul>";
console.log(text);

// using foreach method

const myFuncarr = [1, 3, 4, 5, 6, 6, 7];
let text1 = "";
myFuncarr.forEach(myFunction);

const myFunction = (value) => {
    text1 += value;
}
console.log(text1);

// add element into array

myFuncarr.push(1);
console.log(myFuncarr);

