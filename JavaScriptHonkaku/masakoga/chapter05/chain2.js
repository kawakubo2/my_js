let Animal = function(name) {
    this.name = name;
};

Animal.prototype = {
    walk: function() {
        console.log(this.name + 'はトコトコ歩く');
    }
};

/*
親クラスのコンストラクタに引数がある場合、
子クラスのコンストラクタで引数を取り、
親クラスのコンストラクタを呼び出す
*/
let Dog = function(name) {
    Animal.call(this, name);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン！');
};

let d = new Dog('ポチ');
d.walk();
d.bark();