// constructor method to create object
class myName {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    fullname() {
        return `my name is :${this.name} + ${this.id}`
    }
}
const myname1 = new myName("gwagon", 2020);
alert(myname1.fullname());
