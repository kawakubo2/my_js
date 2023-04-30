let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let mem = new Member('太郎', '山田');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());