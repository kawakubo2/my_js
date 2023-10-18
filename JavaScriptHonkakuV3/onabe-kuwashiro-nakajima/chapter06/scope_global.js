let scope = 'globalScope';

function checkScope() {
    return scope;
}

console.log(checkScope());
console.log(scope);

let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(`合計: ${total}`);

function sumup() {
    // let total = 0;
    for (let i = 1; i <= 10; i++) {
        total += i; // totalを関数内部で宣言していないため、グローバルスコープを探す
    }
    return total;
}

console.log(`合計: ${sumup()}`);