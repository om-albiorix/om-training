const myDate = new Date();
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());
console.log(myDate.getDay());

const mydate = new Date();

// utc standard
const myDate2 = new Date();
myDate2.toUTCString();
console.log(myDate2);

// iso standard
const myDate3 = new Date();
myDate3.toISOString();
console.log(myDate3);

//Date.parse areconvert into miliseconds

// get timezoneoffset
//is given diffrence beetwen utc time zone and 
const d = new Date();
let diff = d.getTimezoneOffset();