
function union(set1, set2) {
    let result = new Set();
    for (let e of set1) {
        result.add(e);
    }
    for (let e of set2) {
        result.add(e);
    }
    return result;
}

function intersect(set1, set2) {
    let result = new Set();
    for (let e of set1) {
        if (set2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

function except(set1, set2) {
    let result = new Set();
    for (let e of set1) {
        if (!set2.has(e)) {
            result.add(e);
        }
    }
    return result;

}

let s1 = new Set([1, 3, 5, 6, 9, 10]);
let s2 = new Set([1, 2, 5, 7, 9, 13]);

console.log(union(s1, s2));
console.log(intersect(s1, s2));
console.log(except(s1, s2));