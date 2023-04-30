let scores = [
    { kokugo: 72, sugaku: 70, eigo: 58, rika: 60, shakai: 93},
    { kokugo: 48, sugaku: 88, eigo: 77, rika: 83, shakai: 80},
    { kokugo: 58, sugaku: 72, eigo: 63, rika: 90, shakai: 79}
];

function calcTotalGroupByStudent(student_scores) {
    let result = [];
    for (let student of student_scores) {
        let total = 0;
        for (let kamoku in student) {
            total += student[kamoku];
        }
        result.push(total);
    }
    return result;
}

console.log(calcTotalGroupByStudent(scores));

function calcTotalGroupByKamoku(student_scores) {
    let kamoku_average = new Map();
}
