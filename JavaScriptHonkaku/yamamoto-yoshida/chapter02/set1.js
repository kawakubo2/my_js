const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64]);

// 和集合
function union(set1, set2) {
    let result = new Set();
    for (const e of set1) {
        result.add(e);
    }
    for (const e of set2) {
        result.add(e);
    }
    return result;
}

// 積集合
function intersect(set1, set2) {

}

// 差集合
function difference(set1, set2) {

}

console.log(union(numbers1, numbers2));
