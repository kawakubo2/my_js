function print_queue(queue) {
    console.log("---< 待合室 >---");
    for (const p of queue) {
        console.log(p);
    }
}


const queue = [];

while(true) {
    const sw = prompt("1.受付 2.診察 9.終了: ");
    if (sw == "9") break;
    let name = null;
    switch (sw) {
        case "1":
            name = prompt("名前: ");
            queue.push(name); // 末尾に追加
            print_queue(queue);
            break;
        case "2":
            name = queue.shift(); // 先頭から削除
            console.log(`${name}さん、診察室へどうぞ。`);
            print_queue(queue);
            break;
        default:
            console.log("1または2を指定してください。");
            break;
    }
}