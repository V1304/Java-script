class Person {

    constructor(name , age){
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Employee extends Person{

    constructor(name,age,designation){
        super(name,age); // calling parent class constructor
        this._designation = designation;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    // instance method
    printEmployee(){
        console.log(`NAME : ${this.name}
                     AGE : ${this.age}
                     DESIGNATION : ${this.designation}`);
    }

}

// Create a new employee
let employee1 = new Employee('John',40, 'Manager');
employee1.printEmployee();

// change the data
employee1.designation = 'Sr Manager';
employee1.age = 45;
employee1.printEmployee();

