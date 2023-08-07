const fruits = {banana: 120, apple: 150, grape: 200, pear: 180};

// for...in命令は連想配列専用の繰り返し構文。取り出されるのはキーのみ
for (const fruit_name in fruits) { // fruit_nameのことを仮変数と呼ぶ
    console.log(`${fruit_name}は${fruits[fruit_name]}円です。`);
}