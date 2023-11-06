const parent = {
    x: 10,
    y: 20
};

const obj = Object.create(parent, {
    z: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(obj);
console.log(Object.getPrototypeOf(obj));

parent.v = 0;

for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}

/*
console.log('--- プロパティを直接指定 ---');
console.log(`x: ${obj.x}`); // obj['x']
console.log(`y: ${obj.y}`); // obj['y']
console.log(`z: ${obj.z}`); // obj['z']
*/