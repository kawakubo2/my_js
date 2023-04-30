const set1 = new Set([2, 4, 6, 8, 10, 12]);
const set2 = new Set([1, 2, 4, 8, 16, 32]);

function print_set(set) {
    let s = '';
    for (const elem of set) {
        s += elem + ' ';
    }
    console.log(s);
}

// 和集合
function union(set1, set2) {
    const result = new Set();
    for(const elem of set1) {
        result.add(elem);
    }
    for(const elem of set2) {
        result.add(elem);
    }
    return result;
}

const set3 = union(set1, set2);
console.log("---< 和集合 >---");
print_set(set3);

function intersect(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

const set4 = intersect(set1, set2);
console.log("---< 積集合 >---");
print_set(set4);

function diff(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (!set2.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

const set5 = diff(set1, set2);
console.log("---< 差集合 >---");
print_set(set5);