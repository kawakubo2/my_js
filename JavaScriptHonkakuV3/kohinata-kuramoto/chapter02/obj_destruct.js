let title = 'ABC';
let publisher = '集英社';

let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社'
};
let { title: subject, publisher: company } = book;
console.log(subject); // 結果：Javaポケットリファレンス
console.log(company); // 結果：技術評論社