const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

let mem = new Member('祥寛', '山田');
console.log(mem.getName());