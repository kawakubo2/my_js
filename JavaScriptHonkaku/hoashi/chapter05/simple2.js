const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

const mem = new Member('祥寛', '山田');
console.log(mem.getName());
const mem2 = new Member('一郎', '田中');
console.log(mem2.getName());