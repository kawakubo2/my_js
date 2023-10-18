for (let i = 1; i <= 10; i++) {
    total += i; // global1.jsで宣言した変数にアクセスできる
}
console.log(`合計: ${total}`);

const a = 100;
const b = 200;
const c = add(a, b);
console.log(`${a} + ${b} = ${c}`);

const base = 10;
const height = 8;
const area = getTriangleArea(base, height); // ------ func_basicで定義している関数
console.log(`面積: ${area}`);