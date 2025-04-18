const data = {
  apple: 150,
  orange: 100,
  banana: 120
};

console.log("--- for in 命令 ---");
for (const key in data) {
  console.log(`${key}: ${data[key]}`);
}

console.log("--- Object.entries(連想配列)でkeyとvalueを同時に取り出す ---");
Object.entries(data).forEach(([key, value]) => console.log(`${key}: ${value}`));