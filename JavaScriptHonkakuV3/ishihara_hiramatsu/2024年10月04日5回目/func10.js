const numbers = [7, 8, 2, 3, 9, 4, 1, 6, 10, 5];

/*
受け取った配列のうち偶数の、合計、平均、最大、最小、件数を求める
*/
function groupEvenFunc(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num % 2 === 0) {
            total += num;
            cnt++;
            if (num > max) max = num;
            if (num < min) min = num;
        }
    }
    return [total, total / cnt , max, min, cnt];
}

// 配列の分割代入
const [sum, avg, max, min, count] = groupEvenFunc(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);

/*
配列の要素のうち5以上の値の合計、平均、最大、最小、件数を求める
*/

function groupGreaterThan5Func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num > 5) {
            total += num;
            cnt++;
            if (num > max) max = num;
            if (num < min) min = num;
        }
    }
    return [total, total / cnt , max, min, cnt];
}

const [sum2, avg2, max2, min2, count2] = groupGreaterThan5Func(numbers);
console.log(`合計: ${sum2}`);
console.log(`平均: ${avg2}`);
console.log(`最大: ${max2}`);
console.log(`最小: ${min2}`);
console.log(`件数: ${count2}`);

// 高階関数(higher order function)
// 関数の引数として関数を受け取ったり、戻り値として関数を返す関数を高階関数と呼ぶ
function HigherOrdreFunc(func, nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (func(num)) {
            total += num;
            cnt++;
            if (num > max) max = num;
            if (num < min) min = num;
        }
    }
    return [total, total / cnt , max, min, cnt];
}

const evenSum = HigherOrdreFunc((n) => n % 2 === 0, numbers);
const [sum3, avg3, max3, min3, count3] = groupGreaterThan5Func(numbers);
console.log(`合計: ${sum3}`);
console.log(`平均: ${avg3}`);
console.log(`最大: ${max3}`);
console.log(`最小: ${min3}`);
console.log(`件数: ${count3}`);

const greaterThan5Sum = HigherOrdreFunc((n) => n > 5, numbers);
const [sum4, avg4, max4, min4, count4] = greaterThan5Sum;
console.log(`合計: ${sum4}`);
console.log(`平均: ${avg4}`);
console.log(`最大: ${max4}`);
console.log(`最小: ${min4}`);
console.log(`件数: ${count4}`);

const greaterThan5Sum2= HigherOrdreFunc((n) => n > 5, numbers);
const [sum5, avg5, max5, min5, count5] = greaterThan5Sum2;
console.log(`合計: ${sum5}`);
console.log(`平均: ${avg5}`);
console.log(`最大: ${max5}`);
console.log(`最小: ${min5}`);

                    