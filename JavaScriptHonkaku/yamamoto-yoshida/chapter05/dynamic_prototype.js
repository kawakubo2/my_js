const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const mem = new Member('太郎', '山田');

Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

console.log(mem.getName());