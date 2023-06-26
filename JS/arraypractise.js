const myNumner = "9512282008";
let x = myNumner.split("");
x.splice(3, 0, "-");
x.splice(7, 0, "-");
let joinstring = x.join("");
console.log(joinstring);



let myarray = [12, 3, 3, 4, 4]
let xy = myarray.map((v, i, a) => a);
console.log(xy)



let newarr1 = [...myarray, 12];
newarr = myarray;
myarray.unshift(12);
console.log(myarray);
console.log(newarr1);


let myarray2 = [12, 12, 12, 2];
let newarr = [...myarray2, { a: 13 }];
newarr = myarray;
newarr.push({
    a
        : 13
})
console.log(myarray2);
console.log(newarr);