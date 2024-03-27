const member = {
    name: '佐藤リオ',
    age: 21,
    show: function() {
        console.log(`私は${this.name}、${this.age}歳です。`);
    }
};

member.show();

const json1 = JSON.stringify(member);
console.log(json1);
console.log(typeof json1);
const obj1 = JSON.parse(json1);
console.log(typeof obj1);
console.log(`名前: ${obj1.name} 年齢: ${obj1.age}`);