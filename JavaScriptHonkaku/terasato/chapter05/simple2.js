const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function() {
    return this.lastName + this.firstName;
};

let m1 = new Member('太郎', '山田');
let m2 = new Member('花子', '横山');

console.log(m1.getName());
console.log(m2.getName());