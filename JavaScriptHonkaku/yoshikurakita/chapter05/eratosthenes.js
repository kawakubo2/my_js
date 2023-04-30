const NUM = 100000000;

let start = Date.now();
let nums = new Array(NUM + 1);
nums[0] = 0;
nums[1] = 0;
for (let i = 2; i <= NUM; i++) {
    nums[i] = 1;
}
for (let i = 2; i <= NUM; i++) {
    if (nums[i] === 1) {
        for (let j = i + i; j <= NUM; j += i) {
            nums[j] = 0;
        }
    }
}

let count = 0;
for (let i = 0; i <= NUM; i++) {
    if (nums[i] == 1) {
        count++;
        // console.log(i);
    }
}
let end = Date.now();
console.log(`処理時間: ${end - start}`)
console.log(`1億までに存在する素数の個数は${count}`);