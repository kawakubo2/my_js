function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === 'number') {
                resolve(value ** 2);
            } else {
                reject('引数valueは数値でなければいけません');
            }
        }, 500);
    });
}

async function main() {
    const result1 = await asyncProcess(2);
    const result2 = await asyncProcess(result1);
    const result3 = await asyncProcess(result2);
    return result3;
}

main()
    .then(resp => console.log(resp))
    .catch(error => console.log(`エラー: ${error}`));

asyncProcess(2)
    .then(result => {
        return asyncProcess(result);
    })
    .then(result => {
        return asyncProcess(result)
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(`エラー: ${error}`));

// モジュール内であればawaitだけでも動作する(ES2022から)
// const result1 = await asyncProcess(3);
// const result2 = await asyncProcess(result1);
// const result3 = await asyncProcess(result2);
// return result3;