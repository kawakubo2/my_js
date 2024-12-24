const fruits = ["カボチャ", "ニンジン", "ホウレンソウ", "ジャガイモ"];
console.log(fruits.join(","));
console.log(fruits.join("/"));

let s = "";
for (const f of fruits) {
    s += f + ","
}
console.log(s.substring(0, s.length - 1));