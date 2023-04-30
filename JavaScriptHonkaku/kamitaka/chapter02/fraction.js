let x = 0.2;
let y = 0.6;

console.log(x * 3);
console.log(x * 10 * 3 === y * 10); // 左結合
console.log(x * 3 * 10 === y * 10);

let b = true;
console.log(!b);
console.log(!!b); // 右結合

// 複合代入演算子
let n = 10;
console.log(`n=${n}`);
n += 5; // n = n + 5;
console.log(`n += 5 ---> ${n}`);
n -= 7; // n = n - 7;
console.log(`n -= 7 ---> ${n}`);
n *= 3; // n = n * 3;
console.log(`n *= 3 ---> ${n}`);
n /= 4; // n = n / 4;
console.log(`n /= 4 ---> ${n}`);
n %= 5; // n = n % 5;
console.log(`n %= 5 ---> ${n}`);