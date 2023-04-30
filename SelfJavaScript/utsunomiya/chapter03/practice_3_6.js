let obj = {
    prop: true,
    subObj: { val: 100 },
    greeting: function() {
        console.log('こんにちは。');
    }
};

console.log(obj.prop);
console.log(obj.subObj.val);
obj.greeting();

console['log'](obj['prop'])
console['log'](obj['subObj']['val']);
obj['greeting']();

obj['subObj']['val2'] = 1000;

console.log(obj);