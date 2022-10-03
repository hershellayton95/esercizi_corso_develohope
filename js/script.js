const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  // code here
  const obj = persons.filter(item => item.id == id);
  return new Promise((resolve) => resolve(obj))
}

// code here
fetchPersonById(1).then(console.log);
fetchPersonById(2).then(console.log);
fetchPersonById(3).then(console.log);