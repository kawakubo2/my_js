let n = 1000;
console.log(typeof n);

let s = 'abc';
console.log(typeof s);

let b = false;
console.log(typeof b);

function sub(x, y) {
    if (typeof x !== 'number') {
        throw new Error('非数値型: ' + x);
    }
    if (typeof y !== 'number') {
        throw new Error('非数値型: ' + y);
    }
    return x - y;
}
console.log(typeof sub);