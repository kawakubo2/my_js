const date = new Date();
console.log(date.getDay());

/*
問1
引数が数値型で0～6(0: 日, 1: 月, 2: 火, 3: 水, 4: 木, 5: 金, 6: 土)
日、月、火、水、木、金、土を返す関数

type:
    short 日
    mudium 日曜
    long 日曜日
*/
function youbi(num, type='short') {
    const dow = ['日', '月', '火', '水', '木', '金', '土'];
    suffix = ''
    switch (type) {
        case     'short':  suffix = '';    break;
        case     'medium': suffix = '曜';   break;
        case     'long':   suffix = '曜日'; break;
        default:           suffix = '';     break;
    }
    return dow[num] + suffix;
}

console.log(youbi(0));
console.log(youbi(2, 'medium'));
console.log(youbi(6, 'long'));
console.log(youbi(date.getDay(), 'long'));