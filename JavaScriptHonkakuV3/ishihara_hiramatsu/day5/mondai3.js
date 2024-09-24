const members = [
    { name: '山田太郎', age: 42, weight: 68, height: 169 },
    { name: '田中一郎', age: 55, weight: 83, height: 181 },
    { name: '鈴木次郎', age: 28, weight: 78, height: 172 },
    { name: '佐藤勝男', age: 37, weight: 80, height: 170 },
];

/*
問1
オブジェクトの配列からオブジェクトを取り出し以下のように表示
山田太郎 42
田中一郎 55
鈴木次郎 28
佐藤勝男 37
*/
for (const member of members) {
    console.log(member.name, member.age);
}
/*
問2
オブジェクトの配列からオブジェクトを取り出し、BMIを計算し、なまえと一緒に表示する
BMI = weight / (height / 100) ** 2
山田太郎 25.31 // BMIは例として書いている、正しい値ではない
田中一郎 27.13
・・・・
*/