let x = [1, 2, 3];

if (typeof x !== 'number' && typeof x !== 'string') {
  console.log('数値でも文字列でもありません。');
}
if (!(typeof x === 'number' || typeof x === 'string')) {
  console.log('数値でも文字列でもありません。');
}

