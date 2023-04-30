let Animal = function() {}
let Hamster = function() {}

Hamster.prototype = new Animal();

let a = new Animal();
let h = new Hamster();

console.log('---< constructor >---')
console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);

console.log('---< instanceof >---')
console.log(a instanceof Animal);
console.log(h instanceof Animal);
console.log(h instanceof Hamster);

console.log('---< isPrototypeOf >---');
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));
