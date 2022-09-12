const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);

/*in realtà const non sta ad indicare che sia una "readonly", ma solo che non possiamo riassegnare quella variabile (quindi possiamo manipolarla)*/