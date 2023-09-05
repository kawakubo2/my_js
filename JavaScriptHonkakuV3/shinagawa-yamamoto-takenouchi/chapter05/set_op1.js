// set_op1.js
const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const set2 = new Set([1, 2, 4, 8, 16, 32, 64, 128]);

// 和集合
function union(s1, s2) {
    const result = new Set();
    for (const e of s1) {
        result.add(e);
    }
    for (const e of s2) {
        result.add(e);
    }
    return result;
}
const a1 = union(set1, set2);
console.log('union(set1, set2): ');
console.log(a1);

function intersect(s1, s2) {
    const result = new Set();
    for (const e of s1) {
        if (s2.has(e)) {
            result.add(e);
        }
    }
    return result;
}
const a2 = intersect(set1, set2);
console.log('intersect(set1, set2): ');
console.log(a2);

function except(s1, s2) {
    const result = new Set();
    for (const e of s1) {
        if (!s2.has(e)) {
            result.add(e);
        }
    }
    return result;
}
const a3 = except(set1, set2);
console.log('except(set1, set2): ');
console.log(a3);