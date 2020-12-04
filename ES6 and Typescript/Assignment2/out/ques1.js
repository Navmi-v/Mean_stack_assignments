// program to check an Armstrong number of n digits
let _previousno = Symbol(`pno`);
let _currentno = Symbol(`cno`);
class Fibonacciseries {
    constructor() {
        this[_previousno] = 0;
        this[_currentno] = 1;
    }
    next(n) {
        let final;
        for (let i = 0; i < n; i++) {
            final = this[_previousno] + this[_currentno];
            this[_previousno] = this[_currentno];
            this[_currentno] = final;
        }
        return final;
    }
}
;
let fs = new Fibonacciseries();
console.log("The next number is: " + fs.next(3));
//# sourceMappingURL=ques1.js.map