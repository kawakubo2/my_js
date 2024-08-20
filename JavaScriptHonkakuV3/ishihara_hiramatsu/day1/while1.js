let lot = 10_000;
let day = 1;
let total = 0;
while(total < lot) {
    total += day;
    day++;
}
console.log(`賞金総額${lot}万を超えるのは${day}日目です。`);