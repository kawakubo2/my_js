const asyncProcess = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値: ${value}`);
            } else {
                reject('入力値は空です');
            }
        });
    });
};

asyncProcess('トクジロウ')
    .then(
        response => {
            console.log(response);
        },
        error => {
            console.log(`エラー: ${error}`);
        }
    )