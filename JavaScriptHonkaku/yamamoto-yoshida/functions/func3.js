const test_data = [
    [3, 2, 1],[3, 1, 2],[3, 3, 2],[3, 2, 2],[3, 2, 3],[3, 3, 3],
    [2, 3, 1],[1, 3, 2],[3, 3, 2],[2, 3, 3],[2, 3, 2],
    [2, 1, 3],[1, 2, 3],[3, 2, 3],[2, 3, 3],[2, 2, 3]
];

function max3_1(a, b, c) {
    let max;
    if (a >= b && b >= c) {
        max = a;
    } else if (a >= c && c >= b) {
        max = a;
    } else if (b >= a && a >= c) {
        max = b;
    } else if (b >= c && c >= a) {
        max = b;
    } else if (c >= a && a >= b) {
        max = c;
    } else if (c >= b && b >= c) {
        max = c;
    }
    return max;
}

function max3_2(a, b, c) {
    let max;
    if (a >= b & a >= c) {
        max = a;
    } else if (b >= a & b >= c) {
        max = b;
    } else if (c >= a & c >= b) {
        max = c;
    }
    return max;
}

function max3_3(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

for (const data of test_data) {
    console.log('------');
    console.log(data);
    console.log(max3_1(...data));
    console.log(max3_2(...data));
    console.log(max3_3(...data));
}