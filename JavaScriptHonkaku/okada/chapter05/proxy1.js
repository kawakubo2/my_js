let data = { rose: 'バラ', sunflower: 'ひまわり', morning_glory: 'あさがお', 123: 'マリーゴールド'};

console.log('123' in data);

let proxy = new Proxy(data, {
    get(target, prop) {
        if (typeof prop === 'string') {
            console.log('[get]キーはstringオブジェクト');
            return target[prop];
        } else if (typeof prop === 'number') {
            return target[prop.toString()]
        } else if (typeof prop === 'object' && prop instanceof Date) {
            console.log('[get]キーはDateオブジェクト');
            return target[prop.toString()]
        } else {
            return '?'
        }
    },
    set(target, prop, val) {
        if (typeof prop === 'string') {
            console.log('[set]キーはstringオブジェクト');
            target[prop] = val;
        } else if (typeof prop === 'number') {
            target[prop.toString()] = val;
        } else if (typeof prop === 'object' && prop instanceof Date) {
            console.log('[set]キーはDateオブジェクト');
            target[prop.toString()] = val;
        } else {
            throw new Error('文字列かできないキーです。');
        }
    },
    has(target, prop) {
        if (typeof prop === 'string') {
            return prop in target;
        } else if (typeof prop === 'number') {
            return prop.toString() in target;
        } else {
            throw new Error('文字列かできないキーです。');
        }
    }
});
console.log('123' in proxy);

let today = new Date();
proxy[today] = 'レンゲソウ';
console.log(proxy[today]);
;