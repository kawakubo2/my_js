const s1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let end;
console.log('---< slice 非破壊的メソッド >---')
for (let i = 0; i < s1.length; i += 5) {
    end = i + 5 >= s1.length ? s1.length : i + 5;
    console.log(s1.slice(i, end))
}
console.log('---< substring 非破壊的メソッド >---')
for (let i = 0; i < s1.length; i += 5) {
    end = i + 5 >= s1.length ? s1.length : i + 5;
    console.log(s1.slice(i, end))
}

console.log('---< splitメソッド >---');
const s2 = "JavaScript,Python,C,C++,C#,Go,Rust";
const array1 = s2.split(",");
console.log(array1);

console.log('---< charCodeAt, codePointAt >---');
const name = "川久保智晴";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ":" + name.codePointAt(i));
}

console.log(String.fromCodePoint(24029, 20037, 20445, 26234, 26228));

const s3 = 'Java';
const s4 = 'Script';
const s5 = s3.concat(s4);
console.log(`s3 = ${s3}`);
console.log(`s4 = ${s4}`);
console.log(`s5 = ${s5}`);

const s6 = '               JavaScript         ';
console.log(s6.trim());