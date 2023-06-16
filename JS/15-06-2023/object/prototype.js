function myFunc(age, city, company) {
    this.myage = age;
    this.mycity = city;
    this.mycompany = company;
}

myFunc.prototype.myNationality = "indian";

myFunc.prototype.main = function () {
    return this.myage + " " + this.myNationality + " " + this.mycompany + " " + this.mycity;
};

let myname = new myFunc(20, "amreli", "albiorix");
console.log(myname.main());


