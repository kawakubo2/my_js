class Member {
    name = '名無しの権兵衛';
    age = 0;

    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const m = new Member();
m.name = '山田太郎';
m.age = 38;
m.show();

const m2 = new Member();
m2.show();