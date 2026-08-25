const langs = ['JavaScript', 'Python', 'Go', 'Rust', 'Perl'];
console.log(langs[0]);
console.log(langs[1]);
console.log(langs[2]);
console.log(langs[3]);
console.log(langs[4]);

console.log('--- ループで取り出す ---');
// for of命令でも取り出せる
for (const lang of langs) {
  console.log(lang);
}

const nums = [
  1000,
  200,
  3000,
  -400,
  600,
];
console.log(nums.length);