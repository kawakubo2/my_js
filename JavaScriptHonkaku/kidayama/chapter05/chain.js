const Animal = function(name) {
    this.name = name;
};

Animal.prototype = {
    walk: function() {
        console.log("トコトコ…！")
    }
};

const Dog = function() {
    Animal.call(this, '動物'); // 親のコンストラクタの呼び出し方
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン！');
}

const d = new Dog();
d.walk();
d.bark();
console.log(d.name);
