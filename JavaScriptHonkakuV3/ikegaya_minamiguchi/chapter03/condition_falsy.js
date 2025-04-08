let value = '';
value = value ? value : '規定値';
console.log(value);

value = '名前は必須入力です。';
value = value ? value : 'エラーなし';
console.log(value);

value = '';
value = value ? value : 'エラーなし';
console.log(value);

value = null;
console.log(value ?? '規定値'); // SQLのCOALESCE関数に相当する COALESCE(value, '規定値')