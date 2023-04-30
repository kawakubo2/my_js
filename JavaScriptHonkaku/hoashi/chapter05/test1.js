var Wings = Wings || {};
Wings.Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Wings.Member.prototype.getName = function() {
    return this.lastName + this.firstName;
}
console.log('---< test1.js >---');
console.log(Wings);