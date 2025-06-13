// 0以上1未満の浮動小数点が帰る
// for (let i = 0; i < 100; i++) {
//     console.log(Math.random());
// }

// let count = 0;
// while(true) {
//     count++;
//     if (Math.random() === 0.0) {
//         console.log('0.0が発生');
//         break;
//     }
//     if (count === 1_000_000_000) {
//         console.log('10億回実行')
//         break;
//     }
// }

// const numSet = new Set();
// for (let i = 0; i < 1_000_000; i++) {
//     numSet.add(Math.floor(Math.random() * 100) + 1)
// }
// const array = Array.from(numSet);
// array.sort((x, y) => x - y);
// for (let i = 0; i < 100; i++) {
//     console.log(`${i + 1}: ${array[i]}`);
// }

function random_int_array(size, min, max) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result;
}

const array1 = random_int_array(100, 5, 10);
console.log(array1);
const set1 = new Set(array1);
console.log(set1);

console.log(random_int_array(20, 1, 100));