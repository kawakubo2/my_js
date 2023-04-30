const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const mem = new Member('祥寛', '山田');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

console.log(mem.getName());

const mem2 = new Member('奈美', '掛谷');
console.log(mem2.getName());