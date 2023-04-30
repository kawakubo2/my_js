function union(set1, set2) {
    let result = new Set();
    for (const n of set1) {
        result.add(n);
    }
    for (const n of set2) {
        result.add(n);
    }
    return result;
}
function intersect(set1, set2) {
    let result = new Set();
    for (const n of set1) {
        if (set2.has(n)) {
            result.add(n);
        }
    }
    return result;
}
function except(set1, set2) {
    let result = new Set();
    for (const n of set1) {
        if (!set2.has(n)) {
            result.add(n);
        }
    }
    return result;
}

const numbers1 = new Set([2, 4, 6, 8, 10, 12, 14, 16]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64, 128]);

console.log('---和集合---');
console.log(union(numbers1, numbers2));
console.log('---積集合---');
console.log(intersect(numbers1, numbers2));
console.log('---差集合---');
console.log(except(numbers1, numbers2));
