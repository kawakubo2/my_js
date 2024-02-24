class Animal {}

class Hamster extends Animal {}

const ani = new Animal();
const ham = new Hamster();

console.log(ani.constructor === Animal);
console.log(ham.constructor === Animal);
console.log(ham.constructor === Hamster);