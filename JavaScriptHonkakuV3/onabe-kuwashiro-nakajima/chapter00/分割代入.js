function getYearMonth() {
    const now = new Date();
    return [now.getFullYear(), now.getMonth() + 1];
}

const today = getYearMonth();
console.log(`年: ${today[0]}`);
console.log(`月: ${today[1]}`);

const [year, month] = getYearMonth();
console.log(year);
console.log(month);
