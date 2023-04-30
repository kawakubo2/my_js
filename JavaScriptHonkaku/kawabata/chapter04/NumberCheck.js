function int_check(num) {
    return /^(\+|-)?\d+$/.test(num);
}
function positive_int_check(num) {
    return /^\d+$/.test(num);
}
function positive_float_check(num) {
    return /^\d+(\.\d)?$/.test(num);
}


let ok = ["+1", "-2", "3", "+12", "-23", "+34", "+8917","-839183", "71739"];
let ng = ["+3.2", "5.6", "1.2.3", "abc", "1234g"];

console.log("--- 符号あり整数値(OK) ---")
for (let s of ok) {
    console.log(int_check(s));
}
console.log("--- 符号あり整数値(NG) ---")
for (let s of ng) {
    console.log(int_check(s));
}

let ok2 = ["3", "2", "10", "20", "19838", "492482", "7.2", "12.3", "3253.2"];
let ng2 = ["+3", "-2", "-12", "+23", "1.23", "5.223"];
console.log('--- プラスの小数点(OK) ---');
for (let s of ok2) {
    console.log(positive_float_check(s));
}
console.log('--- プラスの小数点(NG) ---');
for (let s of ng2) {
    console.log(positive_float_check(s));
}