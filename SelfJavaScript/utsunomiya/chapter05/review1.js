const capitols = {
    日本: '東京',
    アメリカ: 'ワシントン',
    イギリス: 'ロンドン'
};

for (let [country, capitol] of Object.entries(capitols)) {
    console.log(`${country}の首都は${capitol}です。`);
}