class Parent {
    constructor(familyName) {
        this.familyName = familyName;
    }
}

class Child extends Parent {
    constructor(familyName) {
        super(familyName);
    }
    introduction() {
        console.log(`苗字は${this.familyName}です。`);
    }
}

const child = new Child('御子柴');
child.introduction();