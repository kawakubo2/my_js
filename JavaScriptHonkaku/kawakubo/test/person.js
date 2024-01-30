var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullname = function() {
    return this.lastname + this.firstname;
}

var p1 = new Person('太郎', '山田');
console.log(p1.getFullname());

p1.height = 180;
p1.weight = 72;

console.log(p1.height, p1.weight);