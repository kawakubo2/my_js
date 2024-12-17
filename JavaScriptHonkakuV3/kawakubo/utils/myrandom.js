function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random_choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const set = new Set();
for (let i = 0; i < 1000; i++) {
    let n = rand_int(50, 100);
    if (n < 50 || n > 100) {
        console.log('不正な乱数');
        exit;
    }
    set.add(n);
}

let array = Array.from(set); 
array.sort((m, n) => m - n);
array.forEach(e => console.log(e));

console.log(array.length === 51);

const fruits = ['バナナ', 'リンゴ', 'オレンジ', 'イチゴ', 'メロン'];
for (let i = 0; i < 20; i++) {
    console.log(random_choice(fruits));
}

const janken = ['グー', 'チョキ', 'バー'];
for (let i = 0; i < 10; i++) {
    console.log(random_choice(janken));
}