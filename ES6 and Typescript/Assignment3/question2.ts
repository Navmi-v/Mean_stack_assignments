
class account {
    balance_amt: any;
    name: string;
    id: number;
    constructor(id, name, balance_amt ){
        this.id = id;
        this.name= name;
        this.balance_amt = balance_amt;
    }

    getTotalBalance(){
        console.log(this.balance_amt);
    }
}

class savingAccount extends Account{
    interest: any;
    constructor(id, name, balance_amt, interest){
        super(id, name, balance_amt);
        this.interest = interest;
    }

}

class currentAccount extends Account{
    cash_credit: any;
    constructor(id, name, balance_amt, cash_credit){
        super(id, name, balance_amt);
        this.cash_credit = cash_credit;
    }
    
}

let Johnn = new savingAccount ( 101, "John Ambrose", 21890, 235 );
let Laraa = new savingAccount ( 102,  "Lara Jean", 32890, 400 );
let Peterr = new currentAccount (103, "Peter Parker", 10000,  167 );
let Natashaa = new currentAccount ( 104, "Natasha Romanoff", 6000, 893);

console.log(Johnn);
console.log(Laraa);
console.log(Peterr);
console.log(Natashaa);


var Total = (John.balance_amt)+(Lara.balance_amt)+(Peter.balance_amt)+(Natasha.balance_amt);
let total_balanc = () => console.log(Total);