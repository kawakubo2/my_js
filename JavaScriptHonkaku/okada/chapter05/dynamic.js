let Member = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

let mem = new Member('太郎', '山田');
mem.getName = function() {
    return this.lastname + ' ' + this.firstname;
}
console.log(mem.getName());

let mem2 = new Member('花子', '横山');
console.log(mem2.getName());