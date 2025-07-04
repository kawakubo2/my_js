const data = `
{
    "name": "山田太郎",
    "age": 35,
    "salary": 28
}`;

const member = JSON.parse(data);
console.log(member.name);
console.log(member.age);
console.log(member.salary);

console.log(member);
console.log(JSON.stringify(member))