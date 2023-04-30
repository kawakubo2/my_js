function union(set1, set2) {
    const result = new Set();
    for (const e of set1) {
        result.add(e);
    }
    for (const e of set2) {
        result.add(e);
    }
    return result;
}
function intersect(set1, set2) {
    const result = new Set();
    for (const e of set1) {
        if (set2.has(e)) {
            result.add(e);
        }
    }
    return result;
}
function difference(set1, set2) {
    const result = new Set();
    for (const e of set1) {
        if (!set2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

const numbers1 = new Set([2, 4, 6, 8, 10, 12, 14, 16]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64]);

console.log('和集合');
console.log(union(numbers1, numbers2));

console.log('積集合');
console.log(intersect(numbers1, numbers2));

console.log('差集合');
console.log(difference(numbers1, numbers2));
