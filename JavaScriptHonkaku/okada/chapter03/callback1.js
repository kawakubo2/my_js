let nums = [-2, -1, 0, 1, 2, 3, 4, 5, 6]

let circleAreaTotal = nums.filter(n => n > 0 && n % 2 == 0)
                          .map(r => Math.pow(r, 2) * Math.PI)
                          .reduce((total, area) => total + area);
console.log(circleAreaTotal);

let nums2 = [2, 11, 1, 3, 24];
nums2.sort((a, b) => a - b);
console.log(nums2);

const ranks = ['部長', '課長', '主任'];

let employees = [{name: '山田太郎', age: 25, rank: '主任'},
                 {name: '横山花子', age: 38, rank: '課長'},
                 {name: '田中一郎', age: 42, rank: '部長'},
                 {name: '鈴木次郎', age: 32, rank: '主任'},
];
console.log(employees);
employees.sort((a, b) => ranks.indexOf(a.rank) - ranks.indexOf(b.rank));
console.log(employees);