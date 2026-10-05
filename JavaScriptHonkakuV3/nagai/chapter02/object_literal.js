const members = [
  {
    id: 1001,
    name: '山田',
    birthdate: '2000-12-31',
    address: {
      pref: '福岡県',
      city: '福岡市',
      street1: '博多区',
      street2: '山王1丁目'
    }
  },
  {
    id: 1002,
    name: '横山',
    birthdate: '1995-10-05',
    address: {
      pref: '福岡県',
      city: '北九州市',
      street1: '戸畑区',
      street2: 'xxxxx' 
    }
  }
];

for (const member of members) {
  console.log('-----------------------');
  console.log(`id: ${member.id}`); // member['id'];
  console.log(`name: ${member.name}`); // member['name'];
  console.log(`birthdate: ${member.birthdate}`);
  console.log(`pref: ${member.address.pref}`); // member['address']['pref']
  console.log(`city: ${member.address.city}`);
}

for (const member of members) {
  for (const key in member) {
    console.log(`${key}: ${member[key]}`);
  }
}

const book = {
  isbn: '978-4-123-45678-9',
  title: 'JavaScriptでゲーム制作',
  price: 3960
};

book['publisher'] = '技術評論社';
console.log(book);
delete book['price'];
console.log(book);

console.log('price' in book);