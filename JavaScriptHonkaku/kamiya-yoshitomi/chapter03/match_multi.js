const p = /^[0-9]+/gm;
const str = '101匹ワンちゃん。\n7人の小人';
const result = str.match(p);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}