const obj = Object.create(Object.prototype, {
    name: {
        value: '佐藤理央',
        writable: true,
        configurable: true,
        enumerable: true
    },
    age: {
        value: 25,
        writable: false,
        configurable: true,
        enumerable: false 
    },
    gender: {
        value: 'male',
        writable: true,
        configurable: true,
        enumerable: true
    }
});

for (const prop of Object.keys(obj)) {
    console.log(Object.getOwnPropertyDescriptor(obj, prop));
}

console.log(obj.age);
obj.age = 30;
console.log(obj.age);