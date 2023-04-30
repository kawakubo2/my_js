const Animal = function() {}

Animal.prototype.walk = function() {
    console.log('トコトコ...');
};

const SuperAnimal = function() {};
SuperAnimal.prototype.walk = function() {
    console.log('ダダダダダ！');
};

const Dog = function() {};
Dog.prototype = new Animal();
const d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();
const d2 = new Dog();
d2.walk();

d1.walk();