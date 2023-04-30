const people = [
    { name: "山田太郎", age: 28, gender: 'male' },
    { name: "横山花子", age: 30, gender: 'female' },
    { name: "鈴木次郎", age: 22, gender: 'male' },
    { name: "星山裕子", age: 20, gender: 'female' }
];

for (let person of people) {
    if (person.gender === 'male' && person.age >= 25) {
        console.log(`${person.name}は25歳以上の男性です。`);
    } else {
        console.log(`${person.name}は25歳以上の男性ではありません。`);
    }
}