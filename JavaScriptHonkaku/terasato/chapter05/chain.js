const Animal = function() {}
Animal.prototype.walk = function() {
    console.log('トコトコ...');
}
const Dog = function() {}

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン');
}
const d = new Dog();
d.walk();
d.bark()