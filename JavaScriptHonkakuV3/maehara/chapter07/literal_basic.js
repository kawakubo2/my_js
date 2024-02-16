const member = {
    name: '山田リオ',
    age: 21,
    show() {
        console.log(`私は${this.name}、${this.age}歳です。`)
    }
};

member.show();

member['email'] = 'rio@yamada.com';
member['getEmail'] = function() {
    return this.email;
}

console.log(`Email: ${member.getEmail()}`);