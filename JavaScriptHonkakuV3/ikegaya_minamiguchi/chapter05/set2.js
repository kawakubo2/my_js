const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const set2 = new Set([1, 2, 4, 8, 16, 32]);

function union(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        result.add(elem)
    }
    for (const elem of set2) {
        result.add(elem)
    }
    return result;
}

console.log(union(set1, set2));

function intersect(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

console.log(intersect(set1, set2));

function except(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (!set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

console.log(except(set1, set2));
console.log(except(set2, set1));