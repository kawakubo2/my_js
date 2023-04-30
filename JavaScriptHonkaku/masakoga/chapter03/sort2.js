let rectangles = [
    { width: 25, height: 33},
    { width: 31, height: 23},
    { width: 38, height: 40},
    { width: 22, height: 25},
    { width: 35, height: 35},
];

function area(width, height) {
    return width * height;
}

/* JavaのComparatorに相当 */
rectangles.sort(function(a, b) {
    return area(a.width, a.height) < area(b.width, b.height) ? -1 : ((area(a.width, a.height) > area(b.width, b.height)) ? 1: 0);
});

console.log(rectangles);

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

let employees = [
    { name: '山田太郎', weight: 77, height: 167},
    { name: '田中一郎', weight: 68, height: 173},
    { name: '鈴木次郎', weight: 85, height: 180},
    { name: '佐藤勝男', weight: 72, height: 178},
    { name: '猫山五郎', weight: 70, height: 179},
];

employees.sort(function(x, y) {
    return bmi(x.weight, x.height) < bmi(y.weight, y.height) ? -1 : ((bmi(x.weight, x.height) > bmi(y.weight, y.height)) ? 1 : 0);
});

console.log(employees);

