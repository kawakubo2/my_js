const names = ['山田', '横山', '田中', '山本', '鈴木', '星山', '佐藤'];

for (let i = 0; i < 35; i++) {
    const name = names[i % names.length];
    console.log(`今日の担当は ${name} さんです。`);
}