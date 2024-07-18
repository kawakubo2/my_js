const name = '山田太郎';
const birth = new Date(1970, 5, 25);
const member = {name, birth};
member.weight = 68; // アドレスを変えずにプロパティを追加する
console.log(member);
const height = 172;
// ...memberの...を展開演算子(spread operator)と呼ぶ。{name, birth, heihgt}
const member2 = {...member, height}; // 新しいアドレスにheightプロパティを持ったインスタンスを作る
console.log(member2);
console.log(member === member2);

for (const key in member2) {
    console.log(`${key}=${member2[key]}`);
}


