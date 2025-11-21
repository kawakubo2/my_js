// async --- 非同期処理を粟原素
// await --- 終わるのを待つ

 const url = 'http://localhost:3000/yahoo/api-yahoo-ranking.php';

async function fetch_yahoo_data(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
}


fetch_yahoo_data(url);

function heavy_task() {
    return new Promise((resolv) => {
        setTimeout(() => {
            let total = 0;
            for (let i = 1; i <= 10000; i++) {
                total += i;
            }
            resolv(total);
        }, 1);
    });
}
// setInterval関数、setTimeout関数は非同期関数

// const total = await heavy_task();
// console.log(`合計: ${total}`);
heavy_task()
    .then(total => console.log(`合計: ${total}`));

console.log('処理終了');