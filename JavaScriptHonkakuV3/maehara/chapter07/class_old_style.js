const Member = function(name, age) {
    this.name = name;
    this.age = age;
}

Member.prototype.show = function() {
    console.log(`私の名前は${this.name}、${this.age}歳です。`);
}

const m = new Member('星山裕子', 38);
m.show();
console.log(Member.prototype);