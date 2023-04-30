const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const set2 = new Set([1, 2, 4, 8, 16, 32, 64]);

const union = (set1, set2) => {
    const result = new Set();
    for (const e of set1) {
        result.add(e);
    }
    for (const e of set2) {
        result.add(e);
    }
    return result;
};
console.log(union(set1, set2));

const intersect = (set1, set2) => {
    const result = new Set();
    for (const e of set1) {
        if (set2.has(e)) {
            result.add(e);
        }
    }
    return result;
};
console.log(intersect(set1, set2));

const difference = (set1, set2) => {
    const result = new Set();
    for (const e of set1) {
        if (!set2.has(e)) {
            result.add(e);
        }
    }
    return result;
};
console.log(difference(set1, set2));