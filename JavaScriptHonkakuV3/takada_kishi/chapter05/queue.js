const readline = require('readline-sync');
// Queueの動き

const queue = [];

while (true) {
  const op = readline.question('1.受付 2.診察 3.終了: ');
  if (op === '3') break;
  if (op === '1') {
    const name = readline.question('名前: ');
    queue.push(name);
    console.log(`待合室: ${queue.toString()}`);
  } else if (op === '2') {
    if (queue.length > 0) {
      const name = queue.shift();
      console.log(`${name}さん、診察室へどうぞ。`);
      console.log(`待合室: ${queue.toString()}`);
    } else {
      console.log('待合室には誰もいません。');
    }
  } else {
    console.log('1～3を選択してください。');
  }
}
