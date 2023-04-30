const Animal = function(name) {
    this.name = name;
}
Animal.prototype.walk = function() {
    console.log(`${this.name}はトコトコ歩く。`);
}
const Dog = function(name) {
    Animal.call(this, name);
}

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log(`${this.name}はワンワンなく。`);
}
const d = new Dog('ジョン');
d.walk();
d.bark()