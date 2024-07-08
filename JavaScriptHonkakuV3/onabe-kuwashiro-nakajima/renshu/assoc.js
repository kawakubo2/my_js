const members = {
    "山田太郎": {1: 23, 2: 22, 3: 28}, 
    "読山花子": {1: 33, 2: 35, 3: 38}, 
};

for (const name in members) {
    console.log(name)
    const salary = members[name];
    console.log(salary)
    for (const month in salary) {
        console.log(`${month}月 ${salary[month]}`);
    }
}