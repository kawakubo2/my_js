const nums = [1, 2, 3];

console.log(Math.max(1, 2, 3));

function mymax(...x) {
    /*
    引数の...xは可変長引数のこと
    ただし関数内部では配列として扱える。
    Math.maxは可変長引数を受け取る
    配列は直接渡せないのでスプレッド構文で
    配列を分解して渡す必要がある。
    */
    return Math.max(...x);
}

console.log(mymax(...nums));