function showDialog({
  content = '',
  title = 'My Dialog',
  width = 100,
  height = 100,
  position = 'center',
  modal = false
}) {
  console.log(`content: ${content}`);
  console.log(`title: ${title}`);
  console.log(`width: ${width}`);
  console.log(`height: ${height}`);
  console.log(`model: ${modal}`);
}

showDialog({
  content: 'ダイアログです。',
  modal: true,
});

const content = '';
const title = 'My Dialog';
const width = 100;
const height = 100;
const position = 'center';
const modal = false;

console.log('-------');

let array = {
  content,
  title,
  width,
  height,
  position,
  modal
};



array = {...array, content: 'ダイアログです。', modal: true};
console.log(array);

function bmi({weight = 70, height = 170}) {
  return weight / (height / 100) ** 2;
}

const member = {
  name: '山田太郎',
  age: 34,
  height: 165,
  weight: 72
};

console.log(bmi(member));

const member2 = {
  birthdate: '2000-12-31'
};

console.log(bmi(member2));