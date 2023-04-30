let lang = 'JavaScriptって何？';

console.log(lang.repeat(10));
const N = 30;
for (let i = 1; i <= N; i++) {
    console.log(' '.repeat(N - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(N - i));
}