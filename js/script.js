function adultFilter(persons) {
  // const adults = []

/* ciclo for */    
//     for (let i = 0; i < persons.length; i++) {  
//         if (persons[i].age >= 18){
//             adults.push(persons[i]);
//         } 
//     }

/* ciclo while */ 
//     let i = 0;
//     while (persons[i]) {
        
//         if (persons[i].age >= 18){
//             adults.push(persons[i]);
//         } 

//         i++
//     }

    // const adults = persons.filter(item => item.age >= 18);

    const adults = persons.find(item => item.age >= 18);
    
    
    return adults;
}


  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);