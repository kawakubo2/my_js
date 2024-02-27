const x = 8;
const y = 5;

let answer = x + y;
console.log(`答え: ${answer}`);
answer = x - y;
console.log(`答え: ${answer}`);
answer = x * y;
console.log(`答え: ${answer}`);
answer = x / y;
console.log(`答え: ${answer}`);

/*
割り算は言語によって異なる
C, C++, Java, C#は小数点を切り捨てる
JavaScript, Python, PHPは小数点までだす
*/

answer = x % y;
console.log(`答え: ${answer}`);

const number = 1234567;
const shimo3keta = number % 1000;
if (shimo3keta === 567) {
    console.log(`3等賞: 1万円`);
}
