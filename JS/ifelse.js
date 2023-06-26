
const myFunc = (num) => {
    if(num % 2===0){
    console.log(`${num} is even number`)
    }else{
        console.log(`${num} is odd number`)
    }
}
myFunc(3);

// ifelse condition example

const myFunc1=(a)=>{
    let result="";
    if(a>0){
        result="good day";
    }
    else{
        result="not good day"
    }
    return result;
}
console.log(myFunc1(-2));
