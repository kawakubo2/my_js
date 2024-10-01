const members = [
    { name: '山田太郎', age: 42, weight: 68, height: 169, salary: {1: 23, 2: 28, 3: 30, 4: 25} },
    { name: '田中一郎', age: 55, weight: 83, height: 181, salary: {1: 48, 2: 43, 3: 40, 4: 52} },
    { name: '鈴木次郎', age: 28, weight: 78, height: 172, salary: {1: 31, 2: 30, 3: 29, 4: 30} },
    { name: '佐藤勝男', age: 37, weight: 80, height: 170, salary: {1: 33, 2: 31, 3: 35, 4: 30} },
    { name: '吉岡秀夫', age: 33, weight: 82, height: 160, salary: {1: 30, 2: 30, 3: 29, 4: 30} },
    { name: '佐々木淳', age: 32, weight: 70, height: 171, salary: {1: 27, 2: 28, 3: 29, 4: 30} },
    { name: '大利根誠', age: 47, weight: 81, height: 183, salary: {1: 33, 2: 34, 3: 33, 4: 34} },
    { name: '遠藤伸介', age: 52, weight: 88, height: 172, salary: {1: 40, 2: 41, 3: 39, 4: 43} },
    { name: '加藤三郎', age: 26, weight: 72, height: 168, salary: {1: 24, 2: 25, 3: 22, 4: 28} },
    { name: '菊池英二', age: 29, weight: 90, height: 180, salary: {1: 25, 2: 29, 3: 31, 4: 30} },
];
/*
membersの中で年齢が40未満と40以上のmemberの人数を求める
40未満 6
40以上 4
*/
let counter_lt_40 = 0;
let counter_ge_40 = 0;
for (const member of members) {
    if (member.age < 40) {
        counter_lt_40 +=1;
    } else {
        counter_ge_40 += 1;
    }
}
console.log(`40歳未満: ${counter_lt_40}`)
console.log(`40歳以上: ${counter_ge_40}`)

/*
問2
各年代の年齢を表示する
20代 3
30代 3
40代 2
50代 2
*/
const nendaiMap = new Map();
for (const member of members) {
    const nendai = Math.floor(member.age / 10) * 10;
    if (nendaiMap.has(nendai)) {
        nendaiMap.set(nendai, nendaiMap.get(nendai) + 1);
    } else {
        nendaiMap.set(nendai, 1);
    }
}

for (const nendai of [...nendaiMap.keys()].sort((m, n) => m - n)) {
    console.log(`${nendai}代: ${nendaiMap.get(nendai)}`);
}
/*
問3
名前、年齢、給料の合計を求め、表示する
山田太郎 42 106
田中一郎 55 183
・・・
*/
for (const member of members) {
    let total = 0;
    for (const salary of Object.values(member.salary)) {
        total += salary;
    }
    console.log(`${member.name} ${member.age} ${total}`)
}
/*
問4
membersの配列から給料を求め、給料の範囲毎の人数
範囲とは90～99を90万円台, 100～109を100万円代
のように1の位を切り捨てたものを指す

 90: 1
100: 1
110: 4
・・・
*/

const salaryMap = new Map();
for (const member of members) {
    let total = 0;
    for (const value of Object.values(member.salary)) {
        total += value;
    }
    const salaryRank = Math.floor(total / 10) * 10;
    if (salaryMap.has(salaryRank)) {
        salaryMap.set(salaryRank, salaryMap.get(salaryRank) + 1);
    } else {
        salaryMap.set(salaryRank, 1);
    }
}

for (const rank of [...salaryMap.keys()].sort((m, n) => m - n)) {
    console.log(`${rank}: ${salaryMap.get(rank)}`);
}