const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Object.seal(this);
};

const mem = new Member('祥寛', '山田');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
};
console.log(mem.getName());

// const mem2 = new Member('一郎', '田中');
// console.log(mem2.getName());