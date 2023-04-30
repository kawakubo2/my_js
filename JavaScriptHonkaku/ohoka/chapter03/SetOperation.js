function union(set1, set2) {
    let set3 = new Set();
    for (let n of set1) {
        set3.add(n);
    }
    for (let n of set2) {
        set3.add(n);
    }
    return set3;
}
function intersect(set1, set2) {
    let set3 = new Set();
    for (let n of set1) {
        if (set2.has(n)) {
            set3.add(n);
        }
    }
    return set3;
}
function except(set1, set2) {
    let set3 = new Set();
    for (let n of set1) {
        if (!(set2.has(n))) {
            set3.add(n);
        }
    }
    return set3;
}
function set_to_str(s) {
    let result = '';
    for (let n of s) {
        result += n + ', '
    }
    return result;
}

let s1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
let s2 = new Set([1, 2, 4, 8, 16, 32, 64]);

console.log(`s1: ${set_to_str(s1)}`);
console.log(`s2: ${set_to_str(s2)}`);
console.log(`和集合(s1 | s2): ${set_to_str(union(s1, s2))}`);
console.log(`積集合(s1 & s2): ${set_to_str(intersect(s1, s2))}`);
console.log(`差集合(s1 - s2): ${set_to_str(except(s1, s2))}`);