const kakeibo = [
    {date: '2018-02-03', category: '食費', income: 0, expense: 380},
    {date: '2018-02-10', category: '給料', income: 280000, expense: 0},
    {date: '2018-02-11', category: '教養娯楽費', income: 0, expense: 2800},
    {date: '2018-02-14', category: '交際費', income: 0, expense: 5000},
    {date: '2018-02-20', category: '水道光熱費', income: 0, expense: 7560},
    {date: '2018-02-25', category: '居住費', income: 0, expense: 85000},
];

for (const item of kakeibo) {
    switch(item['category']) {
        case '居住費':
            console.log(`${item['category']}:固定費`);
            break;
        case '水道光熱費':
            console.log(`${item['category']}:固定費`);
            break;
        default:
            console.log(`${item['category']}:変動費`);
            break;
    }
}

for (const item of kakeibo) {
    let income = item['income'];
    if (income > 0) {
        if (income < 5000) {
            console.log('お小遣い');
        } else if (income < 100000) {
            console.log('一時収入');
        } else if (income < 300000) {
            console.log('給料出たー！');
        } else {
            console.log('想定外の収入です！');
        }
    }
}