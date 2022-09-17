const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1


// METODO 1 (sarebbe tedioso se ci fossero troppe nidificazioni)

// const person2 = Object.assign({}, person1);
// person2.address = Object.assign({}, person2.address);


// METODO 2 (dopo la circarca online)

// const person2 = JSON.parse(JSON.stringify(person1));


// METODO  3 - by Filippo Di Marco

const deepClone = {
//assegnatore
  assign(target = {}, obj) {
    objClone = Object.assign(target, obj);
    
    this.correction(objClone);

    return objClone;
  },
//correttore
  correction(obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        
        if(typeof obj[key] === 'object'){
          
          obj[key] = Object.assign({}, obj[key]);
          
          return this.correction(obj[key]);
        }
      }
    }
  }

}

const person2 = deepClone.assign({},person1);


person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);