var Wings = Wings || {};

Wings.Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName: function() {
        return this.lastName + ' ' + this.firstName;
    }
};

const mem = new Wings.Member('太郎', '山田');
console.log(mem.getName());