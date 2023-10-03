function mysum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(mysum());
console.log(mysum(1));
console.log(mysum(1, 2, 3, 4));
console.log(mysum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log('---< ...nums >---');
function mysum2(...nums) {
    nums.push(100);
    let total = 0;
    for (const n of nums) {
        if (typeof n !== 'number') {
            throw new Error(`数値ではありません: ${n}`);
        }
        total += n;
    }
    return total;
}
console.log(mysum2());
console.log(mysum2(1));
console.log(mysum2(1, 2, 3, 4));
console.log(mysum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const numbers = [10, 20, 30, 40];
/*
配列を可変長引数として渡すことはできない。
そのような場合は、スプレッド・オペレータ(...)を使う
関数数内部では配列として。扱える。
*/
console.log(mysum2(...numbers));

let numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [...numbers2, 6, 7, 8, 9, 10];
console.log(numbers3);

