let Animal = function(name) {
    this.name = name;
}

let Dog = function(name, age) {
    Animal.call(this, name);
    this.age = age;
}

Dog.prototype = new Animal();

Dog.prototype.show = function() {
    console.log(`種類:${this.name} 年齢:${this.age}`);
}

let d = new Dog('犬', 5);
d.show();