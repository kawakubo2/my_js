
// Syntax Sugar(糖衣構文)
class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.lastName + ' ' + this.firstName;
    }
}

let m = new Member('太郎','山田');
console.log(m.getName());

// let m2 = Member('次郎', '田中');
// console.log(m2.getName());