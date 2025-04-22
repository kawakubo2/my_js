const members = [
  {
    name: "山田太郎",
    age: 53,
    weight: 78,
    height: 168
  },
  {
    name: "横山花子",
    age: 42,
    weight: 60,
    height: 162
  },
  {
    name: "田中一郎",
    age: 55,
    weight: 80,
    height: 180
  },
];

/*
名前: 山田太郎 年齢: 53 BMI値: 27.6
名前: 横山花子 年齢: 42 BMI値: 22.9
名前: 田中一郎 年齢: 55 BMI値: 24.7
*/

for (const member of members) {
  console.log(`名前: ${member.name} 年齢: ${member.age} BMI値: ${(member.weight / (member.height / 100) ** 2).toFixed(1)}`);
}
console.log('----------------------------------------')
for (const {name, age, weight, height} of members) {
  console.log(`名前: ${name} 年齢: ${age} BMI値: ${(weight / (height / 100) ** 2).toFixed(1)}`);
}