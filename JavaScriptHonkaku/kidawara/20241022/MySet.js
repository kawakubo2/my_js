const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]);

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

const wa = union(numbers1, numbers2);

console.log(wa);

function intersect(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

const seki = intersect(numbers1, numbers2);
console.log(seki);

// set1にset2にないものをSetとして返す
function except(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (!set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

const sa = except(numbers1, numbers2);
console.log(sa);