const Animal = function(name) {
    this.name = name;
}

Animal.prototype = {
    walk: function() {
        console.log(`${this.name}はトコトコ歩く`);
    }
};

const Dog = function(name) {
    Animal.call(this, name);
};

Dog.prototype = new Animal();
Dog.prototype.bark =  function() { 
    console.log(`${this.name}はワンワン鳴く`);
};

const d = new Dog('ジョン');
d.walk();
d.bark();

for (const key in d) {
    if  (d.hasOwnProperty(key)) {
       console.log(`${key}:${d[key]}`);
    }
}

// console.log(Object.getOwnPropertyNames(d));
// 
// console.log('bark' in d);
// console.log('greet' in d);
// console.log('walk' in d);
// console.log('name' in d);