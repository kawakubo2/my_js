const c1 = 'ｷﾞｶﾞ';
console.log([...c1].length);

// console.log(c1[0].codePointAt());
// console.log(c1[1].codePointAt());

const c2 = c1.normalize('NFKC');
console.log(`${c1} -> ${c2}`);

const c3 = 'ｶﾜｸﾎﾞﾄﾓﾊﾙ';
console.log(c3.normalize('NFKC'));