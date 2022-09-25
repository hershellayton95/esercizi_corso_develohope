class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {

    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      } else {
        return this.#amount += amount;
      }
    } catch (err) {
      console.log(err.name+":", err.message);
    }
  }


  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      } else if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      } else {
        return this.#amount += amount;
      }
    } catch (err) {
      console.log(err.name+":", err.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();