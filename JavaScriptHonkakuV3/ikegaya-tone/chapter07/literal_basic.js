const member = {
    name: '佐藤理央',
    age: 21,
    show() {
        console.log(`私は${this.name}、${this.age}歳です。`);
    }
};

member.show();