let queue = [];
while(true) {
    console.log("1.受付 2.診察 9.終了: ");
    let n = prompt("番号: ");
    if (n == 9) break;
    if (n == 1) {
        let name = prompt('名前を入力してください');
        queue.push(name);
    } else if (n == 2) {
        if (queue.length == 0) {
            console.log('待合室は誰もいません。');
            continue;
        }
        let name = queue.shift();
        console.log(name + 'さん、診察室へどうぞ');
    } else {
        console.log('1または2を選択してください');
        continue;
    }
    console.log('待合室:' + queue.toString());
}