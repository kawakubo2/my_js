const asyncProcess = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値: ${value}`);
            } else {
                reject('入力は空です。');
            }
        }, 500);
        console.log('AAA');
    })
};

asyncProcess('トクジロウ')
    .then(
        response => {
            console.log(response);
            return asyncProcess('ニンザブロウ');
        }
    )
    .then(
        response => {
            console.log(response);
            return asyncProcess('リンリン');
        }
    )
    .then(
        response => {
            console.log(response);
        }
    )
    .catch(
        error => console.log(error)
    )
    .finally(
        () => console.log('非同期処理終了')
    );