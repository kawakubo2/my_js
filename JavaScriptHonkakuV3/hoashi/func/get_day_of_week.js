function getDOW(date, style="short") {
    const dow = ["日", "月", "火", "水", "木", "金", "土"];
    return style === "long" ? dow[date.getDay()] + "曜日": dow[date.getDay()];
}

console.log(getDOW(new Date())); // 水
console.log(getDOW(new Date(), "long")); // 水曜日