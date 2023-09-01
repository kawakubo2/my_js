const list = ['A', 'B', 'C', 'D'];
const list2 = list.concat(['E', 'F'], ['G', 'H', 'j']);

console.log(list);
console.log(list2);

let list3 = ['い', 'ろ', 'は'];
const list4 = ['に', 'ほ'];
const list5 = ['へ', 'と', 'ち'];

const num = list3.push(...list4, ...list5); // pushの踊り値は要素数
console.log(typeof num);
console.log(num);

const list6 = [...list3, ...list4, ...list5]; // ...スプレッド・オペレータ

const list7 = [...list3, 'り', 'ぬ'];
console.log(list7);

function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

const numbers = [5, 9, 2, 8, 7, 1, 4, 6, 10, 3];

const [sum, avg, max, min, count]= group_func(numbers); // 配列の分割代入
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);