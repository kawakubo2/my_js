const numbers1 = new Set([2, 4, 6, 8, 10, 12, 14, 16]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64, 128]);

function union(set1, set2) {
    const result = new Set();
    for (const item of set1) {
        result.add(item);
    }
    for (const item of set2) {
        result.add(item);
    }
    return result;
}

console.log('---< 和集合 >---');
console.log(union(numbers1, numbers2));

function intersect(set1, set2) {
    const result = new Set();
    for (const item of set1) {
        if (set2.has(item)) {
            result.add(item);
        }
    }
    return result;
}

console.log('---<  積集合 >---');
console.log(intersect(numbers1, numbers2));

function except(set1, set2) {
    const result = new Set();
    for (const item of set1) {
        if (!set2.has(item)) {
            result.add(item);
        }
    }
    return result;
}

console.log('---<  差集合 >---');
console.log(except(numbers1, numbers2));