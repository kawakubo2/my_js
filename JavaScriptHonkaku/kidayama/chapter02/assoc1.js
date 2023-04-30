const weekdays = {Sun: "日", Mon: "月", Tue: "火", Wed: "水", Thu: "木", Fri: "金", Sat: "土"};

console.log(weekdays['Sun']);
console.log(weekdays['Mon']);
console.log(weekdays['Tue']);
console.log(weekdays['Wed']);
console.log(weekdays['Thu']);
console.log(weekdays['Fri']);
console.log(weekdays['Sat']);

for (const en in weekdays) {
    console.log(`${en}:${weekdays[en]}`);
}
