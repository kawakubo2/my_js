const members = [
    { name: '山田太郎', age: 42, weight: 68, height: 169, salary: {1: 23, 2: 28, 3: 30, 4: 25} },
    { name: '田中一郎', age: 55, weight: 83, height: 181, salary: {1: 48, 2: 43, 3: 40, 4: 52} },
    { name: '鈴木次郎', age: 28, weight: 78, height: 172, salary: {1: 31, 2: 30, 3: 29, 4: 30} },
    { name: '佐藤勝男', age: 37, weight: 80, height: 170, salary: {1: 33, 2: 31, 3: 35, 4: 30} },
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
for (const member of members) {
    const { weight, height} = member;
    console.log(`${member.name} ${(weight / (height / 100) ** 2).toFixed(1)}`);
}
/*
問3
memberのうち、40歳以下でBMI値が27以上のmemberの情報を表示する
*/
for (const member of members) {
    const { weight, height } = member;
    const bmi = weight / (height / 100) ** 2;
    if (member.age <= 40 && bmi >= 27.0) {
        console.log(member)
    }
}
/*
問4
各社員の名前と1月～3月まで給料の合計を表示する
山田太郎 81
田中一郎 131
・・・
*/
for (const member of members) {
    let total = 0;
    for (let month = 1; month <= 3; month++) {
        total += member.salary[month];
    }
    console.log(`${member.name} ${total}`)
}