class Person {

  //costruttore
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter 
  get firstName(){
    return this.firstName;
  }

  get lastName(){
    return this.lastname;
  }

  get age (){
    return this.age;
  }

  get fullName(){
    return this.name + " " + this.surname
  }

  // setter 
  set firstName(firstName){
    this.name = firstName;
  }
  set lastName(lastName){
    this.surname = lastName;
  }
  set age (age){
    this.ages = age;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);