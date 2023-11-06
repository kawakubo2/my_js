const parent = {
    x: {
        get() {
            return this._x ?? 10;
        },
        set(value) {
            console.log(`setter is called: ${value}`);
            this._x = value;
        },
        configurable: true,
        enumerable: true
    },
    y: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    }
};

const obj = Object.create(parent, {
    z: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

obj.x = 100;

console.log('obj: ');
console.log(obj);
console.log('parent: ');
console.log(parent);

console.log('--- for in ---');
console.log('obj: ');
for (const prop in obj) {
    console.log(`${prop}: ${typeof obj[prop] === 'object' ? obj[prop].value : obj[prop]}`);
}
console.log('parent: ');
for (const prop in parent) {
    if (prop === 'x') {
        console.log(`${prop}: ${parent.x.get()}`);
    } else {
        console.log(`${prop}: ${typeof parent[prop] === 'object' ? parent[prop].value : parent[prop]}`);
    }
}