const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Member.prototype = {
    getName: function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString: function() {
        return this.lastName + this.firstName;
    }
}