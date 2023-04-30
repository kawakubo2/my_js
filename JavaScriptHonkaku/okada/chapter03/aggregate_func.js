let nums = [3, 1, 5, 10, 8, 18, 9, 4, 6, 11];

function aggregate(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (max < n) max = n;
        if (min > n) min = n;
    }
    return [total, total / nums.length, max, min, cnt];
}

let [sum, avg, max, min, count] = aggregate(nums);
console.log(`合計:${sum} 平均:${avg} 最大:${max} 最小:${min} 件数:${count}`);

let map1 = new Map();
let obj = {};
let obj2 = {name: '山田太郎'};
map1.set(obj, 'hoge');
console.log(map1.get(obj));
map1.set(obj2, 'foo');
obj2.name = '横山花子';
console.log(map1.get(obj2));