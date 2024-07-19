const Member = function(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
};

Member.prototype.getFullname = function() {
    return this.lastname + this.firstname;
}

const mem1 = new Member('太郎', '山田', 38);
console.log(`${mem1.getFullname()}さんの年齢は${mem1.age}歳です。`);