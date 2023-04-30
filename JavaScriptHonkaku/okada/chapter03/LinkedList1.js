let head = 0;
let tail = 0;

let nums = [];
const N = 10;
for (let i = 0; i < N; i++) {
    nums[i] = undefined;
}

while(true) {
    console.log("1.末尾に追加 2.先頭から削除 3.表示 9.終了");
    let n = console.prompt('選択:');
    if (n == '9') break;
    switch(n) {
        case '1':
            let num = console.prompt('整数:');
            num = parseInt(num);
            nums[head] = num;
            if (head == N - 1) {
                head = 0;
            } else {
                head++;
            }
            break;
        case '2':
            tail++;
            break;
        case '3':
            console.log('---< キューの内容 >---');
            for (let i = 0; i < N; i++) {
                console.log(nums[i]);
            }
            break;
        default:
            console.log('選択肢が不正です。');
            break;
    }
}

