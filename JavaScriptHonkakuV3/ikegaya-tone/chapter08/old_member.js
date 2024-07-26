var Member = function(name, age) {
    this.name = name;
    this.age = age;
};

Member.prototype.show = function() {
    console.log('私の名前は' + this.name + '、' + this.age + '歳です。');
};

var mem = new Member('山田太郎', 38);
mem.show();
