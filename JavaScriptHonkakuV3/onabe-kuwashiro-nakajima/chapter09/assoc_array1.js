const fruits = {banana: 180, apple: 80, orange: 100, grape: 200, strawberry: 300};
/*
bananaは100円です。
appleha80円です。
orangeは100円です。
grapeは200円です。
strawberryは300円です。
*/

/*
for (const 仮変数 of 配列) 命令 ---> 配列専用の繰返し構文
for (const 仮変数 in 連想配列) 命令 ---> 連想配列専用の繰返し構文
*/

for (const fruit in fruits) {
    console.log(`${fruit}は${fruits[fruit]}円です。`);
}