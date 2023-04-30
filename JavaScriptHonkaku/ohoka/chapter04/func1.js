function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

/*
 (-3 + 8) * (3 - 1)
*/

let answer = mul(add(-3, 8), sub(3, 1))
console.log(answer);

/*
 0 ---> 日, 1 ---> 月, 2 ---> 火, 3 ---> 水,
 4 ---> 木, 5 ---> 金, 6 ---> 土
*/
function getYoubiByNum(num) {
    const day_of_week = ['日', '月', '火', '水', '木', '金', '土'];
    return day_of_week[num];
}

/*
youbi(2021, 10, 15) ---> '金'
*/
function youbi(year, month, date) {
    let d = new Date(year, month - 1, date);
    return getYoubiByNum(d.getDay());
}

console.log(youbi(2021, 10, 15));