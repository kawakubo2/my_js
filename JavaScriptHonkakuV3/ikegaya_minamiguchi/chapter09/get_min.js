const data1 = [
    [1, 6],
    [1, 7],
    [2],
    [1, 1],
    [2]
];

const data2 = [
    [1, 5],
    [1, 1],
    [1, 1],
    [1, 9],
    [2],
    [2],
    [1, 2],
    [2]
];

function get_min(data) {
    const result = [];
    let min = 101;
    const xs = [];
    for (let i = 0; i <= 100; i++) {
        xs[i] = 0;
    }
    for (const d of data) {
        const [query, num] = d;
        if (query === 1) {
            xs[num]++;
            if (num < min) min = num;
        } else if (query === 2) {
            result.push(min);
            xs[min]--;
            if (xs[min] <= 0) {
                for (let i = min; i <= 100; i++) {
                    if (xs[i] > 0) min = i;
                }
            } 
        } else {
            throw new Error("クエリに整合性がない");
        }
    }
    return result;
}

function print_result(result) {
    result.forEach(element => console.log(element));
}

function test(data, func) {
    console.log('\n--- テストデータ ---');
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        let s = '';
        for (let j = 0; j < data[i].length; j++) {
            s += data[i][j] + ' ';
        }
        console.log(s);
    }
    console.log('--- 結果 ---');
    const result = func(data);
    result && print_result(result);
}

function main() {
    console.log('\n--- テスト1 ---');
    test(data1, get_min);
    console.log('\n--- テスト2 ---');
    test(data2, get_min);
}

main();