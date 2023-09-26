const add = function(a, b) {
    return a + b;
};

add = 100;

const xyz = add;

console.log(xyz(100, 200));

console.log(typeof xyz);

function mul(x, y) {
    return x * y;
}
console.log(mul(5, 7));

const klm = mul;
console.log(klm(2, 3));