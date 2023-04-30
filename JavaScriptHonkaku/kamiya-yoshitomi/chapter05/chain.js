const Animal = function() {}

Animal.prototype = {
    walk: function() {
        console.log('トコトコ...');
    }
};

const Dog = function() {
    Animal.call(this);
};
/*
子クラスのprototypeに親クラスのインスタンスを格納することで
継承を行う。
*/
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン');
}

const d = new Dog();
d.walk(); // 親クラスのwalkメソッドを呼び出せる
d.bark(); // 子クラスのbarkメソッドを呼び出している
