const false_values = [
  0, 0.0, '', null, undefined
];

const true_values = [
  2, -1.2, 'abc', []
];

console.log('--- falseへ変換 ---');
for (const f of false_values) {
  const ff = !!f;
  const fff = Boolean(f);
  // Boolean(f)
  console.log(`${f}: ${ff}: ${fff}`);
}
console.log('--- trueへ変換 ---');
for (const t of true_values) {
  const tt = !!t;
  const ttt = Boolean(t);
  // Boolean(f)
  console.log(`${t}: ${tt}: ${ttt}`);
}