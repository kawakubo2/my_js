const langs = ["JaVAscript", "Python", "PHP", "Ruby", "Perl"];

// 配列はインデックス(添え字)を指定することで取得、設定ができる
console.log(langs[0]);
console.log(langs[1]);
console.log(langs[2]);
console.log(langs[3]);
console.log(langs[4]);

langs[3] = "Scala";
console.log(langs[3]);

console.log("--- for of 命令で取り出す ---");
for (const lang of langs) {
  console.log(lang);
}

console.log("--- 通常のfor文で取り出す ---");
for (let i = 0; i < langs.length; i++) {
  console.log(langs[i]);
}

console.log("--- forEach で取り出す ---");
langs.forEach((lang) => console.log(lang));

langs.push("Java");
console.log("--- forEach で取り出す ---");
langs.forEach((lang) => {
  lang = lang.substring(0, 1).toUpperCase() + lang.substring(1).toLowerCase();
  console.log(lang);
});
