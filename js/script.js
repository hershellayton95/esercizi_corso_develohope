function calculate() {
  const calculator = {

    startNumber: 0,
    
    add(n) {
      this.startNumber = this.startNumber + n;
      return this;
    },
    sub(n) {
      this.startNumber = this.startNumber - n
      return this;
    },
    multiply(n) {
      this.startNumber = this.startNumber * n
      return this;
    },
    divide(n) {
      this.startNumber = this.startNumber / n
      return this;
    },
    printResult() {
      console.log(this.startNumber)
      return this;
    }
  };
  return calculator;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7