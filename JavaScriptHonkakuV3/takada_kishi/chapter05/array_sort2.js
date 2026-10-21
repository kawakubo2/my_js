const employees = [
  {name: '鈴木清子', clazz: '主任', age: 33, weight: 65, height: 158},
  {name: '山口久雄', clazz: '部長', age: 55, weight: 65, height: 178},
  {name: '井上太郎', clazz: '担当', age: 25, weight: 65, height: 182},
  {name: '和田和美', clazz: '課長', age: 35, weight: 65, height: 170},
  {name: '小森雄太', clazz: '担当', age: 23, weight: 65, height: 168},
];

function bmi(weight, height) {
  return weight / (height / 100) ** 2;
}


// 問題1 年齢の若い順にソート
employees.sort(function(e1, e2) {
  return e1.age - e2.age;
})
console.log(employees);

// 問題2 BMIの小さい順にソート
employees.sort(function(e1, e2) {
  return bmi(e1.weight, e1.height) - bmi(e2.weight, e2.height);
})

console.log(employees);