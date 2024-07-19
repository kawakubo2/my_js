const isEven = function(n) {
    return n % 2 === 0;
}

const func1 = isEven;
console.log(func1(5));
function even(n) {
    return n % 2 === 0;
}
console.log(even(4));
console.log(odd(5));


function odd(n) {
    return n % 2 !== 0;
}


function func2() {
    return function func3() {
        console.log('func3');
    }
}

const func4 = func2();
func4();
