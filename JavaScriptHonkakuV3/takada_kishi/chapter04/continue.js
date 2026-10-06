{
  let result = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) continue; // 偶数の場合の、ブロックの残りの処理をスキップして増減式に戻る
    result += i;
  }

  console.log(`合計: ${result}`);
}