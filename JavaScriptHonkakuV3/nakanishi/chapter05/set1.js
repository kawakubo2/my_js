const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const numbers2 = new Set([1, 2, 4, 8, 16]);

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

console.log('集合1:');
console.log(Array.from(numbers1.values()).join(','));
console.log('集合2:');
console.log(Array.from(numbers2.values()).join(','));

const wa = union(numbers1, numbers2);
console.log('和集合:');
console.log(Array.from(wa.values()).join(','));

function intersect(set1, set2) {
    const result = new Set();
    for (const e of set1) {
        if (set2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

const seki = intersect(numbers1, numbers2);
console.log('積集合');
console.log(Array.from(seki.values()).join(','));

function except(set1, set2) {
    const result = new Set();
    for (const e of set1) {
        if (!set2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

const sa1 = except(numbers1, numbers2);
console.log('--- 差集合 ---');
console.log(Array.from(sa1.values()).join(','));

const sa2 = except(numbers2, numbers1);
console.log('--- 差集合 ---');
console.log(Array.from(sa2.values()).join(','));
// sa2.forEach((value) => console.log(value));