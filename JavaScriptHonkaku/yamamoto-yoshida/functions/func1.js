const today = new Date();
console.log(today.getDay());

function get_youbi(num_dow, full = false) {
    const youbi = ['日', '月', '火', '水', '木', '金', '土'];
    return full ? youbi[num_dow] + '曜日' : youbi[num_dow];
}

console.log(get_youbi(today.getDay()));

console.log(get_youbi(new Date(2023, 0, 1).getDay(), true));