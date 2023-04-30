function f1() {
    let b = 'b';
    return function() {
        return b;
    }
}

let a = f1();
console.log(a());

let n;
function f2() {
    let b = 'b'
    n = function() {
        return b;
    };
}

f2();
console.log(n());

function f3(arg) {
    let n = function() {
        return arg;
    }
    arg++;
    arg++;
    arg++;
    return n;
}

let c = f3(123);
console.log(c());

function f4() {
    let a = [];
    for (var i = 0; i < 3; i++) {
        a[i] = (function(x) {
            return function() {
                return x;
            }
        })(i);
    }
    return a;
}

let d = f4();
console.log(d[0]());
console.log(d[1]());
console.log(d[2]());
