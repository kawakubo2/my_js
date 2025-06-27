/*
東京都　20代    1
東京都　30代    3
東京都　40代    1
東京都　50代    2
神奈川県    40代    2
千葉県    20代    1
千葉県    30代    1
*/
const members = [
    {name: '山田太郎', age: 35, address: '東京都'},
    {name: '横山花子', age: 43, address: '神奈川県'},
    {name: '田中一郎', age: 55, address: '東京都'},
    {name: '山本久美子', age: 28, address: '千葉県'},
    {name: '鈴木次郎', age: 49, address: '神奈川県'},
    {name: '星山裕子', age: 43, address: '東京都'},
    {name: '佐藤次郎', age: 32, address: '東京都'},
    {name: '佐々木義男', age: 51, address: '東京都'},
    {name: '和田実', age: 38, address: '千葉県'},
    {name: '内藤知美', age: 25, address: '東京都'},
    {name: '高橋勝男', age: 31, address: '東京都'},
];

function myfloor(num, prec) {
    return Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

// for(const m of members) {
//     console.log(`${m.name}:${myfloor(m.age, -1)}代`);
// }

const addressMap = new Map();
for (const m of members) {
    const address = m.address;
    const age = myfloor(m.age, -1);
    if (!addressMap.has(address)) {
        const ageMap = new Map();
        ageMap.set(age, 1);
        addressMap.set(address, ageMap);
    } else {
        const ageMap = addressMap.get(address);
        if (!ageMap.has(age)) {
            ageMap.set(age, 1);
        } else {
            ageMap.set(age, ageMap.get(age) + 1);
        }
    }
}

const ages = [20, 30, 40, 50];

for (const [address, ageMap] of addressMap.entries()) {
    console.log(`------ ${address} ------`);
    for (const age of ages) {
        console.log(`${age}代: ${ageMap.get(age) ?? 0}`);
    }
}