const employees = [
    {name: '山田太郎', age: 38, weight: 70, height: 168},
    {name: '横山花子', age: 29, weight: 60, height: 165},
    {name: '田中一郎', age: 55, weight: 83, height: 180},
    {name: '山本久美子', age: 43, weight: 53, height: 158},
];

for (const employee of employees) {
    console.log(employee['name'] + 'さんのBMI値は' + (employee['weight'] / (employee['height'] / 100) ** 2));
}