const queue = [];
function print_queue(queue) {
    console.log('--- 待合室 ---');
    let waiting_room = '';
    for (const q of queue) {
        waiting_room += q + ' ';
    }
    console.log(waiting_room);
}
while(true) {
    const s = prompt('1.受付 2.診察 3.終了: ');
    let name;
    if (s === '3') break;
    if (s === '1') {
        name = prompt("名前: ");
        queue.push(name);
        print_queue(queue);    
    } else if (s === '2') {
        if (queue.length > 0) {
            name = queue.shift();
            console.log(`${name}さん、診察室へどうぞ`);
        } else {
            console.log('待合室には誰もいません。');
        }
        print_queue(queue);    
    } else {
        console.log('1または2を洗濯してください。')
    }

}