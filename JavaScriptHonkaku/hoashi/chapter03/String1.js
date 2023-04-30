const str = "私の会社の郵便番号は〒812-0013です。";
const pos = str.indexOf('〒');
console.log(pos);
console.log(str.substring(pos + 1, pos + 8));

const path = '/User/tomok/Documents/foo/bar/note.txt';
const pos2 = path.lastIndexOf('/');
console.log(path.substring(pos2 + 1));

const name = 'Hoashi Naoto';
let [lastname, firstname] = name.split(' ');
console.log(`${lastname}${firstname}`);
let result = name.split(' ');
console.log(result[0] + result[1]);

const numbers = [7, 4, 2, 6, 10, 1, 5, 3, 8, 9];
const group_func = nums => {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

const result2 = group_func(numbers);
console.log(result2[0]);
console.log(result2[1]);
console.log(result2[2]);
console.log(result2[3]);
console.log(result2[4]);

let [sum, avg, max, min, count ] = group_func(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);

const dates = ['2022-12-06', '2022/12/06', '2022.12.06'];
for (const date of dates) {
    console.log(date.split(/[\/\-\.]/).map(s => Number.parseInt(s)));
}

const name2 = "帆足直人";

for (let i = 0; i < name2.length; i++) {
    console.log(`${name2.charAt(i)}の文字コードは${name2.codePointAt(i)}`);
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let start = 0;
let end;
const step = 5;
while(true) {
    end = start + step > alphabet.length ? alphabet.length: start + step;
    console.log(alphabet.substring(start, end));
    if (end >= alphabet.length) break;
    start += step;
}

const str1 = "ABC";
const str2 = "XYZ";
const str3 = str1.concat(str2);
console.log(`str1=${str1}`);
console.log(`str2=${str2}`);
console.log(`str3=${str3}`);