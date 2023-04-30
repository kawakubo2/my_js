let date1 = new Date();
// 3か月後
date1.setMonth(date1.getMonth() + 13);
console.log(date1.toLocaleDateString());
// 3か月前
date1.setMonth(date1.getMonth() - 13);
console.log(date1.toLocaleDateString());

let date2 = new Date('2021/12/31');
date2.setMonth(date2.getMonth() + 2);
console.log(date2.toLocaleDateString());

let date3 = new Date(2021, -3, 100);
console.log(date3.toLocaleDateString());

