const book = {
  title: 'Javaポケットリファレンス',
  publish: '技術評論社',
  price: 2680,
  other: {keywd: 'Java SE 18', logo: 'logo.jpg'}
};

const { other, other: {keywd}, title} = book;

console.log(other);
console.log(`keywd=${keywd}`);
console.log(`title=${title}`);