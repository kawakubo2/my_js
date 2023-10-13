const Member = function(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname;
};

Member.prototype.getName = function() {
    return this.lastname + this.firstname;
}

const m1 = new Member('山田', '太郎');
console.log(m1.getName());