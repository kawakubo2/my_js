const member = new Object();
member.name = '佐藤リオ';
member.birthdate = new Date(2000, 6, 5);
member.getAge = function() {
    const today = new Date();
    let age = today.getFullYear() - this.birthdate.getFullYear();
    if (today.getMonth() < this.birthdate.getMonth() ||
        today.getMonth() === this.birthdate.getMonth() &&
        today.getDate() < this.birthdate.getDate()) {
        age--;
    }
    return age;
};

console.log(`${member.name}さんは${member.getAge()}歳です。`);

const member2 = {
    name: '佐々木義男',
    birthdate: new Date(1970, 6, 4),
    getAge: function() {
        const today = new Date();
        let age = today.getFullYear() - this.birthdate.getFullYear();
        if (today.getMonth() < this.birthdate.getMonth() ||
            today.getMonth() === this.birthdate.getMonth() &&
            today.getDate() < this.birthdate.getDate()) {
            age--;
        }
        return age;
    }
};
console.log(`${member2.name}さんは${member2.getAge()}歳です。`);