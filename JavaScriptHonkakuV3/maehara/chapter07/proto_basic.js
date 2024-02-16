const parent = {
    x: 10,
    y: 20,
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

for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}

console.log(`obj.x=${obj.x}`);
console.log(`obj.y=${obj.y}`);
console.log(`obj.z=${obj.z}`);