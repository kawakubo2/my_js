const queue = [];
while(true) {
    let sw = prompt("1.受付 2.診察 9.終了: ");
    if (sw === '9') break;

    if (sw === '1') {
        let name = prompt("お名前: ");
        queue.push(name);
        console.log('待合室: ' + queue.toString());
    } else if (sw === '2') {
        if (queue.length > 0) {
            let name = queue.shift();
            console.log(`${name}さん、診察室へどうぞ。`);
            console.log('待合室: ' + queue.toString());
        } else {
            console.log('待合室には誰もいません。');
        }
    } else {
        console.log('1または2を入力してください。');
    }
}