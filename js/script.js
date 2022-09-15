function calculateAverageAge(persons) {

    /* do-while*/
    let mean_num = 0;
    const mean_den = persons.length;
    let i = 0;

    do {
        mean_num += persons[i].age;
        i++;
    } while (persons[i]);

    const mean = mean_num / mean_den;

    return mean;
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

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);