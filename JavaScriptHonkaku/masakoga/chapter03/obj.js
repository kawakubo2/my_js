let obj3 = Object.create(Object.prototype, {
    x: { value: 1, writable: true, configurable: true, enumerable: true},
    y: { value: 2, writable: true, configurable: true, enumerable: false},
    z: { value: 3, writable: true, configurable: false, enumerable: false},
    a: { value: 4, writable: false, configurable: false, enumerable: false},
});

for (let key in obj3) {
    console.log(key + ':' + obj3[key]);
}

obj3.x = 10;
obj3.y = 20;
obj3.z = 30;
obj3.a = 40;

delete obj3.z;

console.log('x=' + obj3.x);
console.log('y=' + obj3.y);
console.log('z=' + obj3.z);
console.log('a=' + obj3.a);