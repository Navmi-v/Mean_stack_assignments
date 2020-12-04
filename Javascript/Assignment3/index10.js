function getResults(){
    function BankAccount(accountNumber, accountHolderName, accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }

    function withdraw(amt){
        if(odLimit = undefined){
            if(this.accountBalance-amt > 0){
                this.accountBalance = this.accountBalance-amt;
                console.log(this.accountBalance);
            }
        }
        else if( this.accountBalance - amt > odLimit){
            this.accountBalance = this.accountBalance - amt;
        }
    }
}

var savings = new BankAccount(8479, "Nav",19808, withdraw(100));
BankAccount.proptotype.isSalary = 398098;
console.log(savings.accountBalance);

var currenyt = new BankAccount(89579, "Vishwas", 95893, );
BankAccount.proptotype.odLimit = 398;
console.log(current.accountBalance);

