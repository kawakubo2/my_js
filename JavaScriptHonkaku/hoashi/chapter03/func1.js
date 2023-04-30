function my_ceil(num, keta) {
    return Math.ceil(num * Math.pow(10, keta)) / Math.pow(10, keta);
}
function my_floor(num, keta) {
    return Math.floor(num * Math.pow(10, keta)) / Math.pow(10, keta);
}
function my_round(num, keta) {
    return Math.round(num * Math.pow(10, keta)) / Math.pow(10, keta);
}

let n = 123.456789;
console.log(my_ceil(n, 2));
console.log(my_floor(n, 2));
console.log(my_round(n, 2));