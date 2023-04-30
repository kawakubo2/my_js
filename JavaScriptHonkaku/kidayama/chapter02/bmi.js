const members = [
    { name: "山田太郎", weight: 70, height: 172 },
    { name: "横山花子", weight: 55, height: 158 },
    { name: "田中一郎", weight: 65, height: 167 },
    { name: "星山裕子", weight: 60, height: 159 },
];

/*
bmi = weight / (height / 100) ** 2
山田太郎: 23.7
横山花子: 22.0
・・・
*/

for (const member of members) {
    console.log(member['name']);
    console.log(member['weight']);
    console.log(member['height']);
    console.log(`${member['name']}: ${member['weight'] / (member['height'] / 100) ** 2}`);
}