const Animal = function(name) {
    this.name = name;
};

Animal.prototype = {
    walk: function() {
        console.log('トコトコ');
    },
    intro : function() {
        console.log(`私の名前は${this.name}です。`);
    }
}

const Dog = function(name) {
    Animal.call(this, name);
};
Dog.prototype = new Animal();

Dog.prototype.bark = function() {
    console.log('ワンワン');
}

let d = new Dog('ジョン');
d.walk();
d.bark();
d.intro();