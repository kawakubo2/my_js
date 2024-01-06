const s0 = 'JavaScriptは楽しい';
const s1 = 'JavaScriptは楽しい';

console.log(s0 === s1); // 完全一致

const s2 = 'Java';
console.log(s0.startsWith(s2)); // 前方一致

const s3 = '楽しい';
console.log(s0.endsWith(s3)); // 後方一致

const s4 = 'Script';
console.log(s0.includes(s4));