const words = ["旅行", "桜", "NG", "テレビ", "岸辺", "NG", "ラジオ"];

for (const word of words) {
    if (word === "NG") continue;
    console.log(word);
}