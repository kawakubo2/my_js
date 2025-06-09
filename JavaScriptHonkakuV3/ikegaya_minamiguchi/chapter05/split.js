const str = 'みかん\tりんご\tぶどう\t';

console.log(str.trim().split('\t'));

const numStr = '5,3,7,4,8,2,9,1,10,6';
const numbers = numStr.split(',');
console.log(numbers);

let total = 0;
for (const num of numbers) {
    total += Number.parseInt(num);
}
console.log(`合計: ${total}`);