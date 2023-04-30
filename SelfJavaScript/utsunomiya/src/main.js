class ES2022 {
    prop1 = 0;
    constructor(arg) {
        this.prop2 = arg;
    }
}

const a = new ES2022('a');
console.log(a.prop1);
a.prop1 = 10;
console.log(a.prop1);
console.log(a.prop2);
console.log('---------')
const b = new ES2022('b');
console.log(b.prop1);
b.prop1 = 20;
console.log(b.prop1);
console.log(b.prop2);
console.log('---------')
console.log(a.prop1);