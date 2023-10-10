const numbers = [5, -4, 3, 9, -5, 6, 7, 2, 10, 4, 8, 1];

function mytotal1(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}
console.log(mytotal1(numbers));

/*
正数の合計
*/
function mytotal2(nums) {
    let total = 0;
    for (const n of nums) {
        if(n > 0) {
            total += n;
        }
    }
    return total;
}
console.log(`正の合計 = ${mytotal2(numbers)}`);

/*
 正の奇数の合計
*/
function mytotal3(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            total += n;
        }
    }
    return total;
}
console.log(`正の奇数の合計: ${mytotal3(numbers)}`);


/*
3の倍数の合計
*/
function mytotal4(nums) {
    let total = 0;
    for (const n of nums) {
        if (n % 3 === 0) {
            total += n; 
        }
    }
    return total;
}
console.log(`3の倍数の合計: ${mytotal4(numbers)}`);

/*
ある関数が引数として関数を受け取ったり、
戻り値として関数を返す、そのような関数を
高階関数(higher order function)と呼ぶ。

上記のmytotal2, mytotal3, mytotal4では条件式だけが異なる。
共通しているのは整数値がある条件を満たしていたらtrue、そうで
なければfalseを返しているところ。
、つまり、整数値を受け取りboolean型を返す関数を渡す
高階関数を作ればよい。
*/
function mytotal(nums, filter) {
    let total = 0;
    for (const n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}

console.log(`正数の合計: ${mytotal(numbers, n => n > 0)}`);
console.log(`正数の奇数の合計: ${mytotal(numbers, n => n > 0 && n % 2 !== 0)}`);
console.log(`3の倍数の合計: ${mytotal(numbers, n => n % 3 === 0)}`);