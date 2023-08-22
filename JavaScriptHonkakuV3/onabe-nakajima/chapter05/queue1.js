const queue = [];
while (true) {
    const sw = prompt("1.受付 2.診察 9.終了: ");
    if (sw == '9') break;
    let name = null;
    switch (sw) {
        case '1':
            name = prompt('お名前:');
            queue.push(name);
            console.log('---< 待合室 >---');
            console.log(queue.toString());
            break;
        case '2':
            if (queue.length === 0) {
                console.log('待合室は空です。');
                continue;
            }
            name = queue.shift();
            console.log(`${name}さん、診察室へどうぞ。`);
            console.log('---< 待合室 >---');
            console.log(queue.toString());
            break;
        default:
            console.log('1または2を指定してください。');
            break;
    }
}