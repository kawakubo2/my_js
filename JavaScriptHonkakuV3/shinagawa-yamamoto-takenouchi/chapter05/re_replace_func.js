let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
let str = 'サポートサイトはhttp://www.example.com/です。';
console.log(str.replace(re, function(match, p1, p2, p3, offset, string) {
    return `${match.toUpperCase()}(${p1 ? 'セキュア通信': 'セキュアではない通信'})`;
}));

re = /(ワイン|ケーキ)(が|も)好き/;
let str2 = '私はワインが好きです。しかし、ケーキは嫌いです。チーズはまあまあですかね。';
console.log(str2.replace(re, function(match, p1, p2, offset, string) {
    return `${p1.replace(p1, '♥' + p1 + '♥')}`;
}));