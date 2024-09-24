const members = [
    {number: 1001, name: 'Yamada', age: 35, weight: 72, height: 178},
    {number: 1002, name: 'Sasaki', age: 28, weight: 72, height: 168},
    {number: 1003, name: 'Yoneda', age: 38, weight: 72, height: 162},
    {number: 1004, name: 'Tanaka', age: 41, weight: 72, height: 185},
    {number: 1005, name: 'Furuta', age: 22, weight: 72, height: 165},
    {number: 1006, name: 'Kato', age: 57, weight: 72, height: 178},
    {number: 1007, name: 'endo', age: 39, weight: 72, height: 164},
    {number: 1008, name: 'Suzuki', age: 34, weight: 72, height: 150},
    {number: 1009, name: 'Yamamoto', age: 47, weight: 72, height: 170},
    {number: 1010, name: 'Nekoyama', age: 62, weight: 72, height: 179},
];

/*
問1
memberの配列から名前、年代を取り出し表示する
    Yamada 30
    Sasai 20
    Yoneda 30
    ...
    Nekoyama 60
*/
for (const member of members) {
    console.log(`${member.name} ${Math.floor(member.age / 10) * 10}`);
}

/*
memberの配列から年代ごとの人数を求める
20代: 2
30代: 4
40代: 2
50代: 1
60代: 1
*/

let counter20 = 0;
let counter30 = 0;
let counter40 = 0;
let counter50 = 0;
let counter60 = 0;
for (const member of members) {
    const nendai = Math.floor(member.age / 10) * 10;
    if (nendai >= 20 && nendai < 30) { 
        counter20++; 
    }
    else if (nendai >= 30 && nendai < 40) { 
        counter30++; 
    }
    else if (nendai >= 40 && nendai < 50) { 
        counter40++; 
    }
    else if (nendai >= 50 && nendai < 60) { 
        counter50++; 
    }
    else if (nendai >= 60 && nendai < 70) { 
        counter60++; 
    }
}

console.log(`20代 ${counter20}`);
console.log(`30代 ${counter30}`);
console.log(`40代 ${counter40}`);
console.log(`50代 ${counter50}`);
console.log(`60代 ${counter60}`);

console.log('--- Mapで解く方法 ---');
const nendaiMap = new Map();
for (const member of members) {
    const nendai = Math.floor(member.age / 10) * 10;
    if (nendaiMap.has(nendai)) {
        nendaiMap.set(nendai, nendaiMap.get(nendai) + 1);
    } else {
        nendaiMap.set(nendai, 1);
    }
}

const result = [...nendaiMap.entries()].sort((a, b) => a[0] - b[0]);
for (const r of result) {
    console.log(`${r[0]}代 ${r[1]}`);
}

/*
memberの配列からBMI値27以上のメンバーの名前とBMI値を表示
bmi = weight / (height / 100) ** 2
*/

for (const member of members) {
    const bmi = member.weight / (member.height / 100) ** 2;
    if (bmi >= 27) {
        console.log(`${member.name} ${bmi.toFixed(1)}`);
    }
}

const map = new Map();
for (const member of members) {
    const nendai = Math.floor(member.age / 10) * 10;
    if (map.has(nendai)) {
        map.get(nendai).push(member);
    } else {
        map.set(nendai, [member]);
    }
}
console.log(map);