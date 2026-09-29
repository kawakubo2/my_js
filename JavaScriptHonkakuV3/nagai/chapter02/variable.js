let x = 123;
console.log(typeof x); // number

x = 'ABC';
console.log(typeof x); // string

x = true;
console.log(typeof x); // boolean

x = (a, b) => a * b;
console.log(x(100, 5));
console.log(typeof x); // function

/*
動的型付け言語　・・・JavaScript、Python
静的型付け言語  ・・・C言語、C++、Java、C#、TypeScript
  Java
    String name = "鈴木次郎";
    name = 123; <--- コンパイルエラー
*/

