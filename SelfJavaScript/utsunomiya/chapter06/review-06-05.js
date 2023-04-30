const fn1 = (num1, num2) => num1 + num2;
const fn2 = num => num * 2;
const fn3 = () => console.log('Hello, World');
const fn4 = name => {
    console.log('Hello, World');
    console.log(`Hello, ${name}`);
};
const fn5 = () => ({ name: '独習太郎' });

console.log(fn1(20, 12));
console.log(fn2(30));
fn3();
fn4('JavaScript');
console.log(fn5());