let person = {
    name: '山田太郎',
    age: 30
};

let person2 = {
    name: 'Taro Yamada',
    tel: 092-000-0000
};

let person3 = {
    name: 'ヤマダタロウ',
    weight: 80,
    height: 180
};

let person4 = Object.assign({}, person, person2, person3);

console.log(person4);

for (let key in person4) {
    console.log(`${key}:${person4[key]}`);
};

var obj1 = Object.create(Object.prototype, {
    w : { value: 0, writable: true, configurable: true, enumerable: true},
    x : { value: 1, writable: true, configurable: false, enumerable: true},
    y : { value: 2, writable: true, configurable: false, enumerable: true},
    z : { value: 3, writable: false, configurable: false, enumerable: true},

});

for (let key in obj1) {
    console.log(`${key}:${obj1[key]}`);
}

obj1.z = 10;
console.log(obj1);

console.log(10 / 0);