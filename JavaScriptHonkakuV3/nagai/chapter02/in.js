const book = {
  title: '竜が最後に変える場所',
  price: 99,
  publisher: '講談社'
};

console.log('title' in book);
console.log('authors' in book);

book['authors'] = [
  {
    name: '山田太郎',
    age: 33
  },
  {
    name: '田中一郎',
    age: 55
  }
];

console.log('authors' in book);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers instanceof Array);
console.log(Array.isArray(numbers));

let today = new Date();
console.log(today instanceof Date);
today = 123.456;
console.log(today instanceof Number);

function printNow() {
  console.log(new Date().toLocaleDateString());
}

printNow();