let myStr = "Om Solanki";
myStr.charAt(5);
console.log(myStr);
const myAwesomeArray = [5, 4, 3, 2, 1]
let text=[];
let y=myAwesomeArray.reduce(function(total,sum,array) {
let x=total+array;
return x;
})
console.log(y);
