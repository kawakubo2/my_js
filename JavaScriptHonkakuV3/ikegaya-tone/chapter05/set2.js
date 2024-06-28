const numbers1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const numbers2 = new Set([1, 2, 4, 8, 16, 32, 64]);

const fruits1 = new Set(['バナナ', 'リンゴ', 'ブドウ']);
const fruits2 = new Set(['スイカ', 'バナナ', 'リンゴ', 'ナシ']);

// ドキュメンテーションコメント
/**
 * 
 * 
 * @param {Set} set1 
 * @param {Set} set2 
 * @returns set1とset2の和集合を求め返す。
 */
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
const ret12 = union(fruits1, fruits2);
console.log(ret12);

// set1、set2ともに存在するSetを返す
function intersect(set1, set2) {
    const result = new Set();
    for (const n of set1) {
        if (set2.has(n)) {
            result.add(n)
        }
    }
    return result;
}
const ret2 = intersect(numbers1, numbers2);
console.log(ret2);

// set1に存在し、set2に存在しないSetを返す
// 関数定義
// function 関数名(仮引数1, 仮引数2, ...)
function difference(set1, set2) {
    const result = new Set();
    for (const n of set1) {
        if (!set2.has(n)) {
            result.add(n)
        }
    }
    return result; // 戻り値(返り値)
}
// 関数呼び出し
//   戻り値   関数名     実引数
const ret3 = difference(numbers1, numbers2);
console.log(ret3);