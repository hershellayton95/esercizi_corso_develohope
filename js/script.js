function memoize(fn) {
  let cache = {};

  return (n) => {
    let result = "";
    
    if (!cache[n]){
      cache[n] = fn(n);
      result = `Calculating result for ${cache[n]}`
    } else if (cache[n]){
      result = `Fetching from cache for ${cache[n]}`
    }

    return result;
  }
  
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
