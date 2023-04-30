const members = ['山田', '横山', '田中', '山本', '鈴木'];
let j = 0;
for (let i = 0; i < 5 * 7; i++) {
    console.log(`--- ${Math.floor(i / 5) + 1}巡目 ---`);
    console.log(`今日の当番は${members[j]}`);
    j = (++j) % members.length;
}