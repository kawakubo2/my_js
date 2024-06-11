const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
function even_filter1(num) {
    return num % 2 === 0;
}
const even_numbers1 = [];
for (const n of numbers) {
    if (even_filter1(n)) {
        even_numbers1.push(n);
    }
}
console.log(`even_numbers1=${even_numbers1.toString()}`);

// アロー関数
const even_filter2 = (num) => num % 2 === 0;
const even_numbers2 = [];
for (const n of numbers) {
    if (even_filter2(n)) {
        even_numbers2.push(n);
    }
}
console.log(`even_numbers2=${even_numbers2.toString()}`);

// Functionコンストラクタ経由の関数定義
const even_filter3 = new Function('num', 'return num % 2 === 0;');
const even_numbers3 = [];
for (const n of numbers) {
    if (even_filter3(n)) {
        even_numbers3.push(n);
    }
}
console.log(`even_numbers3=${even_numbers3.toString()}`);

// functionリテラル
const even_filter4 = function(n) {
    return n % 2 === 0;
}
const even_numbers4 = [];
for (const n of numbers) {
    if (even_filter4(n)) {
        even_numbers4.push(n);
    }
}
console.log(`even_numbers4=${even_numbers4.toString()}`);