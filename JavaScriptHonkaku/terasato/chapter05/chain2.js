class Animal {
    walk() {
        console.log('トコトコ...');
    }
}

/*
 class A extends B
 Aを子クラスまたは派生クラスなどと呼ぶ
 Bを親クラスまたは基底クラスなどと呼ぶ
*/
class Dog extends Animal {
    bark() {
        console.log('ワンワン');
    }
}

const d1 = new Dog();
d1.walk();
d1.bark();