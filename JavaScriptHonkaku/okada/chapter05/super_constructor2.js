let Animal = function() {}
Animal.prototype.walk = function() {
    console.log('トコトコ');
}
let SuperAnimal = function() {}
SuperAnimal.prototype.walk = function() {
    console.log('ダダダダ');
}

let Dog = function() {}

Dog.prototype = new Animal();
let d1 = new Dog();

console.log(Dog.prototype);
console.log('SuperAnimalに入れ替える前:' + Dog.prototype.isPrototypeOf(d1));
console.log(d1 instanceof Dog);

d1.walk();

Dog.prototype = new SuperAnimal();
console.log('SuperAnimalに入れ替える後:' + Dog.prototype.isPrototypeOf(d1));
console.log(d1 instanceof Dog);
let d2 = new Dog();

d2.walk();
d1.walk();

Dog.prototype.name = 'あああ';
Dog.prototype.age = 25;

console.log(d2.name);
console.log(d1.name);

console.log(Dog.prototype);

console.log('---< constructor >---');
console.log(d1.constructor === Animal);
console.log(d1.constructor === Dog);

console.log(d2.constructor === SuperAnimal);
console.log(d2.constructor === Dog);

console.log('---< instanceof >---');
// TODO 本来はtrueになるべきだと思われるが、実際にはfalseとなる
console.log(d1 instanceof Dog);
console.log(d1 instanceof Animal);

console.log(d2 instanceof Dog);
console.log(d2 instanceof SuperAnimal);

console.log('---< isPrototypeOf >---');
// FIXME 本来はtrueになるべきだと思われるが、実際にはfalseとなる
console.log(Dog.prototype.isPrototypeOf(d1));
console.log(Animal.prototype.isPrototypeOf(d1));

console.log(Dog.prototype.isPrototypeOf(d2));
console.log(SuperAnimal.prototype.isPrototypeOf(d2));
