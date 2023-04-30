let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
let set2 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]);

function intersection(s1, s2) {
    let result = new Set();
    for (let n of s1) {
        if (s2.has(n)) {
            result.add(n)
        }
    }
    return result;
}
let set3 = intersection(set1, set2);
console.log(set3);
