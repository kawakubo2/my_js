const obj = {
    hoge: 1,
    foo: {
        bar: 100
    }
};
/*
console.log('--- shallow copy ---');
const copied = Object.assign({}, obj);
copied.hoge = 5;
copied.foo.bar = 200;
console.log('fooの中のbarの値を変更した後');
console.log('obj');
console.log(obj);
console.log('copied');
console.log(copied);
*/
console.log('--- deep copy ---');
const copied2 = JSON.parse(JSON.stringify(obj));
copied2.hoge = 5;
copied2.foo.bar = 200;
console.log('fooの中のbarの値を変更した後');
console.log('obj');
console.log(obj);
console.log('copied2');
console.log(copied2);

