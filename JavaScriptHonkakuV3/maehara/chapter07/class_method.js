class Member {
    name = '名無権兵衛';
    age = 0;
    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const m1 = new Member();
m1.gender = 'female';
delete m1.name;
m1.show();
console.log(m1);

const m2 = new Member();
m2.name = '田中一郎';
m2.age = 55;
m2.show();
console.log(m2);