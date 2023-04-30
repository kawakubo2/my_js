class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.lastName + this.firstName
    }
}

let m1 = new Member('太郎', '山田');
let m2 = new Member('花子', '横山');
Member.prototype.getFirstName = function() { return this.firstName; }
console.log(m1.getFirstName());
console.log(m2.getFirstName());
console.log(m1.getName());
console.log(m2.getName());

let Member2 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Member2.prototype.getName = function() {
    return this.lastName + this.firstName;
}

let m3 = new Member2('一郎', '鈴木');
console.log(m3.getName());