const x = 1.9999999;
const y = 1.0000001;
const z = 1.23456;

console.log(Math.floor(x));
console.log(Math.ceil(y));
console.log(Math.round(z));

function my_floor(num, keta) {
    return Math.floor(num * Math.pow(10, keta)) / Math.pow(10, keta);
}
function my_ceil(num, keta) {
    return Math.ceil(num * Math.pow(10, keta)) / Math.pow(10, keta);
}
function my_round(num, keta) {
    return Math.round(num * Math.pow(10, keta)) / Math.pow(10, keta);
}

console.log(my_floor(x, 3));
console.log(my_ceil(y, 3));
console.log(my_round(z, 3));