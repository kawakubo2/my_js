function member_info({name, weight, height}) {
    const bmi = weight / (height / 100) ** 2;
    console.log("%sさんのBMI値は%f", name, bmi);
}
// function member_info({name, height}) {
//     console.log("%sさんの身長はは%dcmです。", name, height);
// }

const members = [
    {name: "山田太郎", age: 38, weight: 70, height: 168},
    {name: "横山花子", age: 29, weight: 53, height: 160},
    {name: "田中一郎", age: 55, weight: 82, height: 178}
];
console.table(members);
members.forEach(m => member_info(m));