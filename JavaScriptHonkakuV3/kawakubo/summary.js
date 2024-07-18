const data = {
    "食費": {4: 10000, 5: 12000, 6: 11800},
    "給料": {4: 30000, 5: 34000, 6: 28000},
    "交際費": {4: 5000, 5: 3000, 6: 4000},
    "水道光熱費": {4: 7000, 5: 6500, 6: 8000}
};

const in_out = {
    "食費": "出金",
    "給料": "入金",
    "交際費": "出金",
    "水道光熱費": "出金"
};

console.log('---< 連想配列として操作 >---');
for (const category in data) {
    const monthly_data = data[category];
    console.log(`費目=${category}`);
    console.log('月別合計')
    for (const month in monthly_data) {
        console.log(`${month} ${monthly_data[month]}`);
    }
}

console.log('---< Mapとして操作 >---')
const map_data = new Map(Object.entries(data)); 
for (const [category, monthly_data] of map_data.entries()) {
    console.log(`費目=${category}`);
    console.log('月別合計')
    const map_monthly_data = new Map(Object.entries(monthly_data))
    for (const [month, value] of map_monthly_data.entries()) {
        if (in_out[category] === "入金") {
            // income_month_arrayに金額を加算
        } else {
            // expense_month_arrayに金額を加算
        }
        // console.log(`${month} ${value}`);
    }
}
