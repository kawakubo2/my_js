class GrandParent {
    constructor(a) {
        this.a = a;
    }
}
class Parent extends GrandParent {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
}

class Child extends Parent {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const grandParent = new GrandParent();
console.log('--- GrandParent ---');
console.log(grandParent instanceof GrandParent);
console.log(grandParent instanceof Parent);
console.log(grandParent instanceof Child);
const parent = new Parent();
console.log('--- Parent ---');
console.log(parent instanceof GrandParent);
console.log(parent instanceof Parent);
console.log(parent instanceof Child);
console.log('--- Child ---');
const child = new Child();
console.log(child instanceof GrandParent);
console.log(child instanceof Parent);
console.log(child instanceof Child);
console.log('--- GrandParentのhasOwnProperty ---');
console.log(grandParent.hasOwnProperty('a'));
console.log(grandParent.hasOwnProperty('b'));
console.log(grandParent.hasOwnProperty('c'));
console.log('--- ParentのhasOwnProperty ---');
console.log(parent.hasOwnProperty('a'));
console.log(parent.hasOwnProperty('b'));
console.log(parent.hasOwnProperty('c'));
console.log('--- ChildのhasOwnProperty ---');
console.log(child.hasOwnProperty('a'));
console.log(child.hasOwnProperty('b'));
console.log(child.hasOwnProperty('c'));