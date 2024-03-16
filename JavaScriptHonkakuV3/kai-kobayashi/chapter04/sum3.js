const MAX = 1_000_000_000;
const NUM = 317;

const start1 = new Date(); 
let total1 = 0;
for (let i = 0; i <= MAX; i++) {
    if (i % 317 === 0) {
        total1 += i;
    }
}
const end1 =  new Date();
console.log(`合計: ${total1}`);
console.log(`処理時間: ${end1 - start1}`);

const start2 = new Date(); 
let total2 = 0;
for (let i = 317; i <= MAX; i += 317) {
    total2 += i;
}
const end2 =  new Date();
console.log(`合計: ${total2}`);
console.log(`処理時間: ${end2 - start2}`);