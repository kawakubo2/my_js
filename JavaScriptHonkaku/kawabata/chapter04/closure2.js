function f(x) {
    let a = [];
    for (let i = 0; i < 3; i++) {
        a[i] = function() {
            return i + x;
        };
    }
    return a;
}
let b1 = f(0);
console.log(b1[0]());
console.log(b1[1]());
console.log(b1[2]());
let b2 = f(100);
console.log(b2[0]());
console.log(b2[1]());
console.log(b2[2]());