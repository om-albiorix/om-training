// set method
const Letters = new Set([1, 3, 3, 3, 4]);
console.log(Letters.size);
Letters.add("a");
Letters.add("b");
console.log(Letters.size);

//foreach in using in set method
//foreach give each set returns
const quantity = new Set([1, 3, 4, 4, 5, 5]);

let text = '';
quantity.forEach(function (value) {
    text += value + "<br>";
})

//values method

let number = 0;
for (let y of quantity.values()) {
    number += y + "<br>";
}
