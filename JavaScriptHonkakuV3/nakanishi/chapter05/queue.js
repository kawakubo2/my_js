const queue = [];
while (true) {
    const sw = prompt("1.受付 2.診察 9.終了");
    if (sw == '9') break;
    if (sw == '1') {
        queue.push(prompt("名前: "));
        console.log(`待合室: ${queue.toString()}`);
    } else if (sw == '2') {
        const name = queue.shift();
        console.log(`${name}さん、診察室へどうぞ`);
        console.log(`待合室: ${queue.toString()}`);
    } else {
        console.log('1または2を入力してください');
    }
}