const s = 'Python Java Go TypeScript Rust C# Ruby';
const target = 'Rust';

/*
文字列sからRustを削除
split
indexOf
splice
join
*/

const a = s.split(" ");
const pos = a.indexOf(target);
a.splice(pos, 1);
const result = a.join(" ");
console.log(result);
