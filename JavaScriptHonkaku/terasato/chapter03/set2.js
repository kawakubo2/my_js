const s1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const s2 = new Set([1, 2, 4, 8, 16, 32]);

console.log('s1=', s1);
console.log('s2=', s2);

function union(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        result.add(elem);
    }
    for (const elem of set2) {
        result.add(elem);
    }
    return result;
}

console.log('和集合(s1 union s2): ', union(s1, s2));

function intersect(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

console.log('積集合(s1 intersect s2): ', intersect(s1, s2));

function except(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (!set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

console.log('差集合(s1 except s2): ', except(s1, s2));
console.log('差集合(s2 except s1): ', except(s2, s1));