const person = {
    // value
    
    // getter
    get firstName() {
        return this.name;
    },

    get lastName() {
        return this.surname;
    },

    // setter
    set firstName(name) {
        this.name = name;
    },

    set lastName(surname) {
        this.surname = surname;
    },

    // fuction
    fullName() {
        return this.name + " " + this.lastName
    }
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";

simon.firstName = "Simon";
simon.lastName = "Collins";


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins