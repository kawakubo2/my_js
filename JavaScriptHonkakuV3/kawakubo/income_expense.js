const search_start_month = 1;
const search_end_month = 3;

const inout = {
    "食費": "出金",
    "給料": "入金",
    "教養娯楽費": "出金",
    "交際費": "出金"
};

const data = {
    "食費": {1: 1000, 2: 2000, 3: 3000},
    "給料": {1: 10000, 2: 20000, 3: 30000},
    "教養娯楽費": {1: 2000, 2: 4000, 3: 6000},
    "交際費": {1: 3000, 2: 6000, 3: 9000},
};

const monthly_income_total = {}
const monthly_expense_total = {}
for (let month = search_start_month; month <= search_end_month; month++) {
    monthly_income_total[month] = 0;
    monthly_expense_total[month] = 0;
}
console.log(monthly_income_total);
console.log(monthly_expense_total);

for (const category in data) {
    for (const month in data[category]) {
        if (inout[category] === '入金') {
            monthly_income_total[month] += data[category][month]; 
        } else {
            monthly_expense_total[month] += data[category][month];
        }
    }
}

console.log('月毎入金合計額');
console.log(monthly_income_total);
console.log('月毎出金合計額');
console.log(monthly_expense_total);