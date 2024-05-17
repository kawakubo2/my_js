let a = 10;
let b = ++a; // a = a + 1
console.log('前置インクリメント');
console.log(`a=${a}, b=${b}`);

let x = 10;
let y = x++;
console.log('後置インクリメント');
console.log(`x=${x}, y=${y}`);

let m = 10;
let n = m++ * m++;
console.log(`m=${m}, n=${n}`);

let k = 10;
k += 1; // k = k + 1; -> k += 1; --> k++