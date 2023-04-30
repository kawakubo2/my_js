const queue = [];
while (true) {
    let sw = prompt('1.受付 2.診察 9.終了: ');
    if (sw == 9) break;
    let name;
    switch (sw) {
        case '1':
            name = prompt('名前: ')
            queue.push(name);
            console.log(`待合室: ${queue}`);
            break;
        case '2':
            if (queue.length === 0) {
                console.log('待合室には誰もいません。');
                continue;
            }
            name = queue.shift();
            console.log(`${name}さん、診察室へどうぞ`);
            console.log(`待合室: ${queue}`);
            break;
        default:
            console.log('1または2を選択してください。');
            break;
    }
}