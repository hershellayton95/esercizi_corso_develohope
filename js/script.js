const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
const values = Object.values(person);

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]}`);
}