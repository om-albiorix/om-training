// constructor method
function Person(city, country) {
    this.city = city;
    this.country = country;
}
const myData = new Person('Dhari', 'India');
console.log(myData.city);





function myFunc(age, city, year) {
    this.myage = age;
    this.mycity = city;
    this.myyear = year;
    this.name = function () {
        return this.myage + " " + this.myyear
    };
}
const calAge = new myFunc(20, "jsdnf");
console.log(calAge.name);
