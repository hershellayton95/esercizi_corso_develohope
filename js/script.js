class BankAccount {

  #saldo;

  constructor(money){
    this.#saldo = money;
  }

  deposit(money){
    this.#saldo = this.#saldo + money;
  }

  withdraw(money){
    this.deposit(money * -1);
  }

  view(){
    console.log(this.#saldo);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();