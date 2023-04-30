function f1() {
    let b = 10;
    return function() {
        return b++;
    }
}

let n1 = f1();
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());

let n2;
function f2() {
    let b = 100;
    n2 = function() {
        return b++;
    }
}
f2();
console.log(n2());
console.log(n2());
console.log(n2());
console.log(n2());
console.log(n2());

function f3(arg) {
    let n = function() {
        return arg;
    }
    arg++;
    return n;
}

let n3 = f3(123);
console.log(n3());

function f4() {
    let a = [];
    var i;
    for (i = 0; i < 3; i++) {
        // a[i] = function() { return i; }
        a[i] = (function(x) {
                    return function() {
                        return x;
                    }
                })(i);
    }
    return a;
}

let n4 = f4();
console.log(n4[0]());
console.log(n4[1]());
console.log(n4[2]());