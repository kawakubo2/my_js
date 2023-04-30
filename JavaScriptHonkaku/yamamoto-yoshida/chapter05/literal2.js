const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype = {
    getName: function() {
        return this.lastName + ' ' + this.firstName
    },
    toString: function() {
        return this.lastName + this.firstName;
    }
};

const mem = new Member('一郎', '田中');
console.log(mem.getName());
console.log(mem.toString());
