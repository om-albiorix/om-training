// set(),get(),entries(),values(),add(),delete(),clear(),map(),foreach(),keys(),has();

// map with foreach
const cars = new Map([
    ["alto", 5],
    ["seltos", 17],
    ["creta", 13]
]);
let text = "";
cars.forEach(function (value, key) {
    text += key + ' ' + value;
})

//  delete method;
cars.delete('alto');
console.log(cars)

// clear method;
cars.clear();
console.log(cars);

//set method
const fruits = new Map();
fruits.set('mango', 100);
console.log(fruits)

// get method

console.log(fruits.get("mango"));

// size
console.log(fruits.size);

//has return in boolean
console.log(fruits.has("mango"));

//typeof
console.log(typeof fruits);