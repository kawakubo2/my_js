const obj = { hoge: 1, foo: {bar: 100}};
const copied = JSON.parse(JSON.stringify(obj));

obj.foo.bar = 99;
obj.hoge = 9;
console.log(obj);
console.log(copied);