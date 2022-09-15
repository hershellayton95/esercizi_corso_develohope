function sumUntil(maxValue) {

    let sum = 0;
    let i = 0;
    for (;i <= maxValue;){
        sum += i;
        i++
    }

    return sum;
  }
  
  console.log(sumUntil(5));