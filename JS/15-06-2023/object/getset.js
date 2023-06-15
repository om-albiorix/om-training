// get method

const myObj = {
    firstName: "Solanki",
    lastName: "Om",
    get getname() {
        this.firstname + " " + this.lastName;
    }
}
console.log(myObj.getname)

//set method

const Obj = {
    company: "kira",
    set changecom(newName) {
        this.company = newName;
    }
}
console.log(Obj) // before use of getter
Obj.changecom = "albiorix";
console.log(Obj); // after use of setter

