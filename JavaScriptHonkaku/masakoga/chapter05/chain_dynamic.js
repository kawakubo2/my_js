let Animal = function() { };

Animal.prototype.walk = function() {
    console.log('トコトコ...');
};

let SuperAnimal = function() { }

SuperAnimal.prototype.walk = function() {
    console.log('ダダダダダ！');
}

let Dog = function () {}

Dog.prototype = new Animal();
let d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();
let d2 = new Dog();
d2.walk();
d1.walk();