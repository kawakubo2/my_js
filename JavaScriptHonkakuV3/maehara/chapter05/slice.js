const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                  'O','P','Q','R','S','T','U','V','W','X','Y','Z'];

console.log('slice(start, end)のend引数はその数を含めないのか');
let step = 5;
for (let start = 0; start < alphabet.length; start += step) {
    if (start + step >= alphabet) step = start + (alphabet % step);
    console.log(alphabet.slice(start, start + step))
}