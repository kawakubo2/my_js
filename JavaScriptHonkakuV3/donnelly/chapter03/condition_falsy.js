// let value = 'JavaScript本格入門';
let value = '';

value = value ? value : 'タイトルなし';

console.log(value);

// ES2021から ||=

let value2 = 'John Smith';
value2 ||= '名前なし'; // valueに空文字列, null, undefinedをfalseとみなす
console.log(value2);

let value3 = '';
value3 ??= '規定値'; // nullとundefinedだけをfalseとみなす
console.log(value3);
