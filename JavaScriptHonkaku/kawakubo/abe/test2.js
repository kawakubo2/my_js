// 各処理を呼び出す関数
// awaitを使う関数自身にはasyncをつける
const example = async () => {
  // 処理の完了を待ってほしい関数の前にawaitをつける
  await test1();
  test2();
  test3();
}

// 3秒後にconsole.logする関数
function test1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('test1');
      resolve();
    }, 3000);
  });
}

const test2 = () => {
  console.log('test2');
}
const test3 = () => {
  console.log('test3');
}

example();
