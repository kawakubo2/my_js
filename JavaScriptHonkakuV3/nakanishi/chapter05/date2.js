const now = new Date();
console.log(`年: ${now.getFullYear()}`);
console.log(`月: ${now.getMonth() + 1}`);
console.log(`日: ${now.getDate()}`);
console.log(`時: ${now.getHours()}`);
console.log(`分: ${now.getMinutes()}`);
console.log(`秒: ${now.getSeconds()}`);

// 1年5か月25日後
now.setFullYear(now.getFullYear() + 1);
console.log(now.toLocaleString());
now.setMonth(now.getMonth() + 5);
console.log(now.toLocaleString());
now.setDate(now.getDate() + 25);

const lastday = new Date();
lastday.setMonth(lastday.getMonth() + 1);
lastday.setDate(0);
console.log(lastday.toLocaleDateString());

function getLastday(date) {
    const lastday = new Date(date.getFullYear(), date.getMonth(), date.getDate()); 
    lastday.setMonth(lastday.getMonth() + 1);
    lastday.setDate(0);
    return lastday;
}

console.log(getLastday(new Date()));