const array1 = [-3, 2, 5, 4, 3, 8, -4, 6];

for (const num of array1) {
    console.log(num ** 2);
}

console.log('---< forEach >---');
array1.forEach(function(n) { console.log(n ** 2)});

console.log('--- 偶数のみの配列を返す ---');
const array2 = [];
for (const num of array1) {
    if (num % 2 === 0) {
        array2.push(num);
    }
}
console.log(array2);

console.log('--- 偶数のみの配列を返す(filterを使用) ---');
const array3 = array1.filter(function(n) { return n % 2 === 0});
// const array3 = array1.filter(n => n % 2 === 0);
console.log(array3);

console.log('--- 配列の数値を2乗した配列を返す ---');
const array4 = [];
for (const num of array1) {
    array4.push(num ** 2);
}
console.log(array4);
console.log('--- 配列の数値を2乗した配列を返す(map関数を使用) ---');
const array5 = array1.map(function(n) { return n ** 2;});
console.log(array5);

console.log('--- 配列の偶数の数値を2乗した配列を返す ---');
array6 = array1
            .filter(function(n) { return n % 2 === 0; })
            .map(function(n) { return n ** 2;});
console.log(array6);

console.log(array1.every(function(n) { return n > 0}));
console.log(array1.every(function(n) { return n > -10}));

console.log(array1.some(function(n) { return n % 2 === 0}));
console.log(array1.some(function(n) { return n === 0}));

console.log('--- 配列の偶数の数値を2乗した値の合計 ---');
const total= array1
                .filter(function(n) { return n % 2 === 0; })
                .map(function(n) { return n ** 2; })
                .reduce(function(total, n) { return total + n; });
console.log(total);