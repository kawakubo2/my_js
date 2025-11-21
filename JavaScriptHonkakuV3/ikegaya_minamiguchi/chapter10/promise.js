function asyncProcess(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
            resolve(`入力値: ${value}`);
        } else {
            reject(`入力値は空です`);
        }
      }, 500);
    });
}

asyncProcess('トクジロウ')
    .then(response => console.log(response))
    .catch(error => console.log(`エラー: ${error}`))
    .finally(() => console.log('処理終了'));

asyncProcess()
    .then(response => console.log(response))
    .catch(error => console.log(`エラー: ${error}`))
    .finally(() => console.log('処理終了'));

const promise1 = asyncProcess('ヤマダタロウ');
promise1
    .then(resp => console.log(resp))
    .catch(error => console.log(`エラー: ${error}`));

console.log('処理終了');

// fetch(url)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));