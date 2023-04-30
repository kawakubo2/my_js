const languages = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'JavaScript', 'Java'];

const pos1 = languages.indexOf('Java');
console.log(`Javaのindex=${pos1}`);

const pos2 = languages.indexOf('Ruby');
console.log(`Rubyのindex=${pos2}`);

const pos3 = languages.lastIndexOf('JavaScript');
console.log(`JavaのlastIndex=${pos3}`);

const numbers1 = [1, 2, 3];
const numbers2 = [1, 3, 5, 7];
const numbers3 = numbers1.concat(numbers2);

console.log(`numbers1=${numbers1.toLocaleString()}`);
console.log(`numbers2=${numbers2.toLocaleString()}`);
console.log(`numbers3=${numbers3.toLocaleString()}`);

const array1 = '札幌,東京,横浜,名古屋,大阪,神戸,福岡';
const cities = array1.split(',');
console.log(Array.isArray(cities));
console.log(cities.toLocaleString());

const numbers4 =    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                     '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                     '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

const size = numbers4.length;
for (let i = 0; i < Math.ceil(size / 7); i++) {
    console.log(numbers4.slice(i * 7, i * 7 + 6));
}

const array2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log('---< splice(破壊的メソッド) >---');
console.log('=== 削除 ===');
console.log(`削除前: array2=${array2.toLocaleString()}`);
const array3 = array2.splice(2, 3); // 2番目から3個分削除;
console.log('array2.splice(2, 3)');
console.log(`削除後: array2=${array2.toLocaleString()}`);
console.log(`戻り値: array3=${array3.toLocaleString()}`);

const array4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log('---< splice(破壊的メソッド) >---');
console.log('=== 置換 ===');
console.log(`置換前: array4=${array4.toLocaleString()}`);
const array5 = array4.splice(2, 3, 'Y', 'Z'); // 2番目から3個分削除;
console.log("array4.splice(2, 3, 'Y', 'Z')");
console.log(`置換後: array4=${array4.toLocaleString()}`);
console.log(`戻り値: array5=${array5.toLocaleString()}`);

const array6 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log('---< splice(破壊的メソッド) >---');
console.log('=== 挿入 ===');
console.log(`挿入前: array6=${array6.toLocaleString()}`);
const array7 = array6.splice(2, 0, 'Y', 'Z'); // 2番目から0個分削除;
console.log("array6.splice(2, 0, 'Y', 'Z')");
console.log(`挿入後: array6=${array6.toLocaleString()}`);
console.log(`戻り値: array7=${array7.toLocaleString()}`);

const array8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log('---< fill(破壊的メソッド) >---');
console.log(`fill前: array8=${array8.toLocaleString()}`);
array8.fill('Z', 2, 5);
console.log(`fill後: array8=${array8.toLocaleString()}`);

