const queue = [];

function print_queue() {
    console.log(`待合室: ${queue.toString()}`);
}

while (true) {
    let sw = prompt("1.受付 2.診察 9.終了: ")
    if (sw == '9') break;
    switch(sw) {
        case '1':
            let name = prompt("名前: ");
            queue.push(name);
            print_queue();
            break;
        case '2':
            if (queue.length > 0) {
                console.log(`${queue.shift()}さん、診察室へどうぞ`);
            } else {
                console.log('待合室には誰もいません。');
            }
            print_queue();
            break;
        default:
            console.log('1または2を選択してください。');
            break;
    }
}