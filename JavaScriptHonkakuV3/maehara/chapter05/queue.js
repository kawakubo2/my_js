let queue = [];
while (true) {
    let name = "";
    let ret = prompt("1.受付 2.診察 9.終了");
    if (ret === "9") break;
    if (ret === "1") {
        name = prompt("名前");
        queue.push(name);
        console.log(`待合室: ${queue.toString()}`);
    } else if (ret === "2") {
        if (queue.length === 0) {
            console.log('待合室は空です。');
            continue;
        }
        name = queue.shift();
        console.log(`${name}さん、診察室へどうぞ。`);
    } else {
        console.log('受付か診察を選択してください');
    }
}