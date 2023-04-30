let obj3 = Object.create(Object.prototype, {
    x: {value: 1, writable: true, configurable: true, enumerable: true},
    y: {value: 2, writable: true, configurable: true, enumerable: true},
    z: {value: 3, writable: true, configurable: false, enumerable: true},
    w: {value: 4, writable: false, configurable: false, enumerable: true},
});

obj3.w = 10;
for (let k in obj3) {
    console.log(k + ":" + obj3[k]);
}