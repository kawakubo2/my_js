const queue = []

while (true) {
    let sw = prompt('1.受付 2.診察 9.終了: ');
    if (sw === '9') break;
    let name = '';
    switch (sw) {
        case '1':
            name = prompt('名前: ');
            queue.push(name);
            console.log(`診察室: ${queue.toLocaleString()}`);
            break;
        case '2':
            name = queue.shift();
            if (name) {
                console.log(`${name}さん、診察室へどうぞ。`);
            } else {
                console.log('診察室には誰もいません。');
            }
            console.log(`診察室: ${queue.toLocaleString()}`);
            break;
        default:
            console.log('1または2を選択してください。');
            break;
            
    }
}