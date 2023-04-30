class Parent {
    constructor(value) {
        this.parentProp = value;
    }
    parentMethod() {
        console.log(`親の${this.parentProp}です。`);
    }
}
class Child extends Parent {
    constructor(parentProp, childProp) {
        super(parentProp);
        this.childProp = childProp;
    }
    childMethod() {
        console.log(`${this.childProp}の親は${this.parentProp}です。`);
    }
}

const child = new Child("悟空", "悟飯");
child.parentMethod();
child.childMethod();