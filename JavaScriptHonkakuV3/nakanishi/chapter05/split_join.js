const str = "札幌,東京,横浜,名古屋,大阪,神戸,福岡";
// const cities = str.split(',');
// console.log(cities);
// const str2 = cities.join(':');
// console.log(str2);
const str2 = str.split(',').join('-');
console.log(str2);