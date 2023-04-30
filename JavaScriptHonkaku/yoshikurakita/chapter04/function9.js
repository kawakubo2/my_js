// function命令
function add1(x, y) {
    return x + y;
}

// Functionコンストラクタ経由
let add2 = new Function('x, y', 'return x + y;')

// 関数リテラル, 無名関数, 匿名関数
let add3 = function(x, y) {
    return x + y;
};

// アロー関数
let add4 = (x, y) => x + y;

let a = 100;
let b = 300;

console.log(add1(a, b));
console.log(add2(a, b));
console.log(add3(a, b));
console.log(add4(a, b));

/*
 4で割り切れて100で割り切れなかったら閏年
 ||
 400で割り切れたら閏年

true

 上記以外は閏年ではない　false
*/
function is_leap_year(year) {
    /*
    leap_year = false;
    if (year % 4 === 0 && year % 100 !== 0) {
        leap_year = true;
    }
    if (year % 400 === 0) {
        leap_year = true
    }
    return leap_year;
    */
   return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

years = [2000, 2001, 2004, 2100];
for (let y of years) {
    console.log(is_leap_year(y))
}

/*
 date: 文字列としての日付 例) 2021/09/28
 d.getDay() ---> 2
 戻り値は数値に応じた日本語の曜日を返す ---> 火
*/
function youbi(date) {
    const day_of_week = ['日', '月', '火', '水', '木', '金', '土'];
    let d = new Date(date);
    return day_of_week[d.getDay()];
}

console.log(youbi('2021/09/28'));
console.log(youbi('1999/12/31'));

/*
 bmi = 体重 / (身長/100) ** 2
*/
function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

let w = 88;
let h = 180;
console.log(bmi(w, h));

let numbers = [1, 2, 3, 4];

function total(nums) {
    let result = 0;
    for (let n of nums) {
        result += n; // result = result + n
    }
    return result;
}

console.log(total(numbers));

let numbers2 = [3, 12, 4, 9, 20, 11, 10, 7, 8, 19];

function my_max(nums) {
    let max = nums[0];
    for (let n of nums) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

console.log(my_max(numbers2));

function even_filter(nums) {
    let result = [];
    for (let n of nums) {
        if (n % 2 == 0) {
            result.push(n)
        }
    }
    return result;
}

console.log(even_filter(numbers2));