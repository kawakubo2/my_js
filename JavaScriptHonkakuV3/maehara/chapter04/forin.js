/*
for in 命令は連想配列に特化した繰返し構文
普通の配列で使っても意味がない
*/

const fruits = {apple: '林檎', orange: 'オレンジ', banana: 'バナナ', grape: '葡萄'};

for (const key in fruits) {
    console.log(`${key}: ${fruits[key]}`);
}
/*
Python
for en, ja in fruits.items():
    print(f"{en}: {ja}");
*/