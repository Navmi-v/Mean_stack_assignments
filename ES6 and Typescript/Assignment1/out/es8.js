class Account {
    constructor(id, name, balance_amt) {
        this.id = id;
        this.name = name;
        this.balance_amt = balance_amt;
    }
}
class SavingAccount extends Account {
    constructor(id, name, balance_amt, interest) {
        super(id, name, balance_amt);
        this.interest = interest;
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance_amt, cash_credit) {
        super(id, name, balance_amt);
        this.cash_credit = cash_credit;
    }
}
let John = new SavingAccount(101, "John Ambrose", 21890, 235);
let Lara = new SavingAccount(102, "Lara Jean", 32890, 400);
let Peter = new CurrentAccount(103, "Peter Parker", 10000, 167);
let Natasha = new CurrentAccount(104, "Natasha Romanoff", 6000, 893);
console.log(John);
console.log(Lara);
console.log(Peter);
console.log(Natasha);
var total = (John.balance_amt) + (Lara.balance_amt) + (Peter.balance_amt) + (Natasha.balance_amt);
let total_balance = () => console.log(total);
//# sourceMappingURL=es8.js.map