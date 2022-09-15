function nicknameMap(persons) {
    const nicknames = [];

    /*VOLEVO PROVARE ALTRI CICLI*/

    // /* for..of*/
    // for (const person of persons) {
    //     nicknames.push(`${person.name}-${person.age}`);
    // }

    /* for..in*/
    //for (const index in persons) {
    //nicknames.push(`${persons[index].name}-${persons[index].age}`);
    // }

    /* forEach*/

        persons.forEach(element => {
            nicknames.push(
                `${element.name}-${element.age}`
            );
        });

    return nicknames;
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

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);