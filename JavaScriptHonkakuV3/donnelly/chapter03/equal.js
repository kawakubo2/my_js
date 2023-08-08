console.log('---< 基本型の場合 >---'); // number, string, boolean
let x = 1;
let y = x;
x = 2;
console.log(`x = ${x}, y = ${y}`);

console.log('---< 参照型の場合 >---'); // 配列, オブジェクト
console.log('-- 配列 --');
const data1 = [0, 1, 2];
const data2 = data1;
data1[0] = 5;
console.log(data2);

console.log('-- オブジェクト --');
const book1 = {
    isbn: '978-4-1111-4444-5',
    title: 'JavaScript入門',
    price: 1000,
    publisher: '技術評論社'
};
const book2 = book1; // book1のアドレスをbook2にコピーしている
book1['title'] = 'JavaScript本格入門';
console.log(book2);


