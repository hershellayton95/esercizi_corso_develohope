function sum(...num) {
  return num.reduce((x, y) => {return x = x + y});
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//anche se, a questo punto:

function sum1(num) {
  return num.reduce((x, y) => {return x = x + y});
}

const numbers1 = [1, 2, 3];
console.log(sum1(numbers1));