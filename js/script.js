const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1

// METODO 1
const person2 = Object.assign({}, person1);

// METODO 2

// const person2 = {};

// for (const key in person1) {
//   if (Object.hasOwnProperty.call(person1, key)) {
//     person2[key] = person1[key];
//   }
// }


// METODO 3 (uno senza motivo)
// const keys = Object.keys(person1);
// const values =  Object.values(person1);
// const person2 = {};

// for (let i = 0; i < keys.length; i++) {
//   person2[keys[i]] = values[i];
// }


person2.firstName = 'Simon';
console.log(person1);
console.log(person2);