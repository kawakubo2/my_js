class Account {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(n) {
        if (!(typeof n === 'number' && n > 0)) {
            throw Exception("引数が数値でないか、0以下");
        }
        this.balance += n;
    }

    withdraw(n) {
        if (!(typeof n === 'number' && n > 0)) {
            throw new Error("引数が数値でないか、0以下");
        }
        if (n > this.balance) {
            throw new Error("引き出し額が残高を超えています。");
        }
        this.balance -= n;
    }

    getBalace() {
        return this.balance;
    }
}

try {
    let b1 = new Account(1000);
    console.log(`残高:${b1.getBalace()}`);
    let p = 1000;
    console.log(`${p}円を預け入れ`);
    b1.deposit(p)
    console.log(`残高:${b1.getBalace()}`);
    p = 800;
    console.log(`${p}円を引き出し`);
    b1.withdraw(p);
    console.log(`残高:${b1.getBalace()}`);
    p = 2000;
    b1.withdraw(p);
    console.log(`残高:${b1.getBalace()}`);
} catch(e) {
    console.log(e.message);
}


