// sort method
// sort method set a alphabatically of array
const fruitArray = ["Banana", "Apple", "Orange", "Grapes", "Mango"];
fruitArray.sort();
console.log(fruitArray);

// reverse method
// reverse method reverse an array 
fruitArray.reverse();
console.log(fruitArray);


// find accending order
const myNumArr = [21, 2, 6, 112, 76, 32, 12];
myNumArr.sort((a, b) => a - b);  // return accending order
myNumArr.sort((a, b) => b - a);  // return decending order
console.log(myNumArr)



// to find max number in array 
const findMax = [1, 23, 43, 56, 76, 89, 12, 23];
console.log(Math.max.apply(null, findMax));

// to find min value in array
const findMin = [1, 23, 43, 56, 76, 89, 12, 23];
console.log(Math.min.apply(null, findMin));

//sorting in array of object
// find id
const arrObj = [
    { name: "abhishek", id: 3 },
    { name: "krishna", id: 2 },
    { name: "tanvi", id: 1 }
]

arrObj.sort(function (a, b) { return a.id - b.id });
console.log(arrObj);


