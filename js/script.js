const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon"

console.log(person1);
console.log(person2);

/*Gli oggetti sono variabili che funzionano per riferimento verso un valore.
  tralasciando cosa avviene alla loro creazione, quando una variabile oggetto viene assegnata ad un'altra variabile, viene copiato solo il riferimento e condivideranno la memoria dove si trova o trovano le variabili.
*/