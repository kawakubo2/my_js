// 分割代入
const datetime = [2026, 9, 9, 17, 21, 30];
const [year, month, day, hour, minute] = datetime;

console.log(`${year}年${month}月${day}日 ${hour}時${minute}分`);
const [,,, ji, fun, byo] = datetime;
console.log(`${ji}:${fun}:${byo}`);

const [sum, avg, max, min, count] = [55, 5.5, 10, 1, 10];
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);
console.log('--- 分割代入がない時代 ---');
const result = [55, 5.5, 10, 1, 10];
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

const subjects = [100, 78, 67, 90, 33];
const [, mathematics, english, , social_studies] = subjects;
console.log('-----------------');
console.log(mathematics);
console.log(english);
console.log(social_studies);