let Animal = function(name, age) {
    this.name = name;
    this.age  = age;
}

Animal.prototype.walk = function() {
    console.log('トコトコ');
}

let Dog = function(name, age) {
    Animal.call(this, name, age);
}

Dog.prototype = new Animal()
Dog.prototype.bark = function() {
    console.log('ワンワン');
}

Dog.prototype.intro = function() {
    console.log(`ボクの名前は${this.name}。${this.age}歳です。`);
}

let d = new Dog('ポチ', 3);
d.walk();
d.bark();
d.intro();

