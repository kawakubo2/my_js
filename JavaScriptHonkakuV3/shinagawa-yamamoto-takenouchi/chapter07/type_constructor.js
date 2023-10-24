class Animal {}
class Hamster extends Animal {}

const ani = new Animal();
const ham = new Hamster();

console.log('---< constructor >---');
console.log(ani.constructor === Animal);
console.log(ham.constructor === Animal);
console.log(ham.constructor === Hamster);

console.log('---< instanceof >---');
console.log(ani instanceof Animal);
console.log(ani instanceof Hamster);
console.log(ham instanceof Animal);
console.log(ham instanceof Hamster);

const t1 = [1, 2, 3, 4];
const t2 = 'ABC';

console.log('---< Array.isArray >---');
console.log(Array.isArray(t1));
console.log(Array.isArray(t2));

console.log('--- Array.isArrayがない頃の調べ方 >---');
console.log(typeof t1 === 'object' && t1 instanceof Array);
console.log(typeof t2 === 'object' && t2 instanceof Array);

console.log('---< isPrototypeOf >---');
console.log(Hamster.prototype.isPrototypeOf(ham));
console.log(Animal.prototype.isPrototypeOf(ham));
console.log(Object.prototype.isPrototypeOf(ham));