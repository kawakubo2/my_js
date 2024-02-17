const Member = function(name, age) {
    this.name = name;
    this.age = age;
};

Member.prototype.show = function() {
    console.log(`私の名前は${this.name}、${this.age}歳です。`);
}

const m = new Member("佐々木義男", 70);
m.show();