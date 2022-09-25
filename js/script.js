class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount > 0) {
        return this.#amount += amount;
      } else {
        throw new RangeError("The amount can't be negative.");
      }
    } catch (err) {
      console.log(err.name+":", err.message);
    }
  }

  withdraw(amount) {
    try {
      if (amount < this.#amount) {
        return this.#amount -= amount;
      } else {
        throw new RangeError("This operation should not be possible, because you cannot withdraw more than the account balance.");
      }
    } catch (err) {
      console.log(err.name+":", err.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();