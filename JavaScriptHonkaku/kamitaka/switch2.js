const kakeibo = [
    { date: '2018-02-03', category: '食費', income: 0, expense: 380 },
    { date: '2018-02-10', category: '給料', income: 280000, expense: 0},
    { date: '2018-02-11', category: '教養娯楽費', income: 0, expense: 2800 },
    { date: '2018-02-14', category: '交際費', income: 0, expense: 5000 },
    { date: '2018-02-20', category: '水道光熱費', income: 0, expense: 7560 },
];

let 出費の分類;
for (const item of kakeibo) {
    const category = item['category'];
    switch(category) {
        case '居住費':
            出費の分類 = '固定費';
            break;
        case '水道光熱費':
            出費の分類 = '固定費';
            break;
        default:
            出費の分類 = '変動費';
            break;
    }
    console.log(`${category}は${出費の分類}です。`);
}

let 収入の分類;
for (const item of kakeibo) {
    const income = item['income'];
    if (income > 0) {
        if (income < 5000) {
            収入の分類 = 'お小遣い';
        } else if (income < 100000) {
            収入の分類 = '一時収入';
        } else if (income < 300000) {
            収入の分類 = '給料出たー';
        } else {
            収入の分類 = '想定外の収入です！';
        }
        console.log(収入の分類);
    }
}

