// Queue(待ち行列) First In First Out(FIFO)
const queue = [];

while(true) {
    let n = prompt('1.受付 2.診察 9.終了: ');
    if (n === '9') break;
    if (n === '1') {
        let name = prompt('お名前: ');
        queue.push(name);
        console.log('---< 待合室 >---');
        for (const n of queue) {
            console.log(n);
        }
    } else if (n === '2') {
        if (queue.length > 0) {
            let name = queue.shift();
            console.log(`${name}さん、診察室へどうぞ`);
        } else {
            console.log('待合室は誰もいません。');
        }
    } else {
        console.log('1または2を入力してください。');
    }
}