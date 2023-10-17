// ES2015より前のオブジェクトの定義の仕方
const Member = function(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname;
};

Member.prototype.getName = function() {
    return this.lastname + this.firstname;
}

const m1 = new Member('山田', '太郎');
console.log(m1.getName());

// ES2015以降
class NewMember {
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    getName() {
        return this.lastname + this.firstname;
    }
}
const m2 = new Member('横山', '花子');
console.log(m2.getName());