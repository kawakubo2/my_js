const d1 = new Date(2024, 12, -35);
console.log(d1.toLocaleString());

function validDate(year, month, date) {
    const temp = new Date(year, month - 1, date);
    const tYear= temp.getFullYear();
    const tMonth = temp.getMonth() + 1;
    const tDate = temp.getDate();
    return year  === tYear &&
           month === tMonth &&
           date  === tDate;
}
console.log(validDate(2024, 12, 24));
console.log(validDate(2024, 2, 29));
console.log(validDate(2024, 13, 24));
console.log(validDate(2024, 13, 24));
console.log(validDate(2024, 2, 30));
console.log(validDate(2024, 0, 10));
console.log(validDate(2024, -2, 10));