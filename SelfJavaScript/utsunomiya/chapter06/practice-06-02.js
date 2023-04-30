function noArgumentFunc() {
    console.log('引数がない関数です。');
}

noArgumentFunc();

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(10, 20));
console.log(multiply(10, 20, 30, 40));

function twoArgumentFunc(arg1, arg2) {
    console.log(`arg1: ${arg1}`);
    console.log(`arg2: ${arg2}`);
}

twoArgumentFunc();
twoArgumentFunc(12);
twoArgumentFunc("ABC", 100);

console.log(Number.parseInt("abc"));