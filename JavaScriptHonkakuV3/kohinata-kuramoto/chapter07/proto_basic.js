const parent = {
  x: 10,
  y: 20,
};

const child = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log('--- child ---');

for (const prop in child) {
  console.log(`${prop}: ${child[prop]}`);
}

console.log('--- parent ---');

for (const prop in parent) {
  console.log(`${prop}: ${child[prop]}`);
}