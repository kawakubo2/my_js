let abc = function(base, height) {
    return base * height / 2;
}
let xyz = abc;

console.log(abc(8, 5));
console.log(xyz(8, 5));

function add(a, b) {
    return a + b;
}

let lmn = add;
console.log(lmn(10, 20));