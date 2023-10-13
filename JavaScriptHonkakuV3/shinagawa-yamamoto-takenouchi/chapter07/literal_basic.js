const member = {
    name: '佐藤リオ',
    age: 21,
    show: function() {
        console.log(`私は${this.name}、${this.age}歳です。`);
    }
};

member.show();

function show(name, age) {
    console.log(`私は${name}、${age}歳です。`);
}

const n = '星山裕子';
const a = 48;
show(n, a);

member.show();

const member2 = {
    name: '横山花子',
    age: 34,
    show() {
        console.log(`私は${this.name}、${this.age}歳です。`);
    }
};
member2.show();