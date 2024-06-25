const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64]);

function union(set1, set2) {
    const result = new Set();
    for (const n of set1) {
        result.add(n);
    }
    for (const n of set2) {
        result.add(n);
    }
    return result;
}

const ret1 = union(numbers1, numbers2);
console.log(ret1);

// set1、set2ともに存在するSetを返す
function intersect(set1, set2) {

}

// set1に存在し、set2に存在しないSetを返す
function difference(set1, set2) {

}