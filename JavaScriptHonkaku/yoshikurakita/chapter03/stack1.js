let stack = [];

while(true) {
    let sw = prompt('1.push(末尾に追加) 2.pop(末尾から削除) 9.終了: ');
    if (sw == 9) break;
    if (sw == 1)  {
        let item = prompt('文字を入力してください: ');
        stack.push(item);
        console.log('stack=' + stack.toString());
    } else if (sw == 2) {
        if (stack.length > 0) {
            let item = stack.pop();
            console.log(item + 'を取り出しました。');
            console.log('stack=' + stack.toString());
        } else {
            console.log('stackは空です');
        }
    } else {
        console.log('1または2を選択してください。');
    }
}

