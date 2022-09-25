function sum(...num) {
  return num.reduce((x, y) => {return x = x + y});
}

console.log(sum(1, 2, 3, 4, 5));