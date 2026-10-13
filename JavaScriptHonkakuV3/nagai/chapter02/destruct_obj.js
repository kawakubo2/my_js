let book = {
  isbn: '978-4-123-56789-0',
  title: 'JavaScript本格入門',
  publisher: '技術評論社',
  authors: [
    {
      name: '山田太郎',
      age: 33
    },
    {
      name: '横山花子',
      age: 38
    }
  ],
  price: 4000
};

const price = 5000;
const title = 'JavaScript本格入門改訂3版';
book = { ...book, price, title };
/*
{
  title: 'JavaScript本格入門',
  publisher: '技術評論社',
  price: 4000,
  price: 5000
}
*/
console.log(book);

const { title: subject, authors, isbn } = book;
console.log(subject);
console.log(authors[0].name);
console.log(authors[1].name);
console.log(isbn);

