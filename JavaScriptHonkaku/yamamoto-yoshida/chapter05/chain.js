const Animal = function(name) {
    this.name = name;
};

Animal.prototype = {
    walk: function() {
        console.log(`${this.name}はトコトコ…歩く`);
    }
}

const Dog = function(name) {
    Animal.call(this, name);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log(`${this.name}はワンワンほえる`);
};

const d = new Dog('ポチ');
d.walk();
d.bark();