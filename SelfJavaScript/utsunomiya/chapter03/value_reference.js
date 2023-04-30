let n = 10;
let m = n;
console.log(`n=${n}, m=${m}`);
m = 20;
console.log(`n=${n}, m=${m}`);

let numbers1 = [1, 2, 3];
let numbers2 = numbers1;
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] *= 2
}

console.log(`numbers1=${numbers1}`)
console.log(`numbers2=${numbers2}`)

let 単価 = 500;
let 数量 = 4;
console.log(`${単価}*${数量}=${単価 * 数量}`);