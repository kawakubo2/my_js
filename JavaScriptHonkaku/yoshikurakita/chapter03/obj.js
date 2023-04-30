let obj3 = Object.create(Object.prototype, {
   x : { value: 1, writable: true, configurable: true, enumerable: false}, 
   y : { value: 2, writable: true, configurable: false, enumerable: true}, 
   z : { value: 3, writable: false, configurable: true, enumerable: true}, 
});

console.log('---< enumerableのテスト >---');
for (let key in obj3) {
    console.log(`${key}:${obj3[key]}`);
}

console.log('---< configurableのテスト >---')
delete obj3.y; // yは削除できない
console.log(obj3);

console.log('--- writableのテスト >---');
obj3.z = 30; // zは変更できない
console.log(obj3)