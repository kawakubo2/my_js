const queue = [];

while (true) {
    const ans = prompt("1.受付 2.診察 9.終了: ");
    if (ans === '9') break;
    if (ans === '1') {
        const name = prompt("名前: ");
        queue.push(name);
        console.log(`待合室: ${queue}`);
    } else if (ans === '2') {
        if (queue.length === 0) {
            console.log('診察室は空です。');
            continue
        }
        const name = queue.shift();
        console.log(`${name}さん、診察室へどうぞ。`);
    } else {
        console.log('1または2を選択してください。');
    }
}