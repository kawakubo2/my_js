const p = /^\d+/gm;
const str = '101匹ワンちゃん。\n7人の小人';
const result = str.match(p);
for (let i = 0; i< result.length; i++) {
    console.log(result[i]);
}