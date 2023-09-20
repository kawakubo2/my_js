const n1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const n2 = new Set([1, 2, 4, 8, 16, 32]);

console.log(n1);
console.log(n2);

/*
 和集合を求める関数
 s1とs2に含まれる全ての要素から
 重複がないよう生成し、返す関数
*/
function union(s1, s2) {
    const result = new Set();
    for (const e of s1) {
        result.add(e);
    }
    for (const e of s2) {
        result.add(e);
    }
    return result;
}

const r1 = union(n1, n2);
console.log(r1);

/*
 積集合を求める関数
 s1とs2両方に含まれる要素から
 なる集合を返す関数
*/
function intersect(s1, s2) {
    const result = new Set();
    for (const e of s1) {
        if (s2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

const r2 = intersect(n1, n2);
console.log(r2);


/*
 差集合を求める関数
 s1に含まれ、s2に含まれない要素から
 なる集合を返す関数
*/
function except(s1, s2) {
    const result = new Set();
    for(const e of s1) {
        if (!s2.has(e)) {
            result.add(e);
        }
    }
    return result;
}

const r4 = except(n2, n1);
console.log(r4);