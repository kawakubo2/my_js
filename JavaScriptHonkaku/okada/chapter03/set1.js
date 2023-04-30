const set1 = new Set([1, 2, 4, 8, 16, 1, 2]);
const set2 = new Set([2, 4, 6, 8, 10, 2, 4]);

function union(s1, s2) {
    let result = new Set();
    for (let n of s1) {
        result.add(n)
    }
    for (let n of s2) {
        result.add(n)
    }
    return result;
}

let r1 = union(set1, set2);
console.log(r1);

function intersect(set1, set2) {
    let result = new Set();
    for (let n of set1) {
        if (set2.has(n)) result.add(n)
    }
    return result;
}

console.log(intersect(set1, set2));

function minus(set1, set2) {
    let result = new Set();
    for (let n of set1) {
        if (!set2.has(n)) result.add(n);
    }
    return result;
}
console.log(minus(set1, set2));