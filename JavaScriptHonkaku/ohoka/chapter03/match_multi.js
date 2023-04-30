let p = /^[0-9]+/gm;
let str = '101匹ワンちゃん。\n7人の小人';
let result = str.match(p);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}