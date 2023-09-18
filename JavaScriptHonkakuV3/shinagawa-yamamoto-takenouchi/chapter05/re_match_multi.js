const re = /^[0-9]+/gm;
const str = '101匹ワンちゃん。\n7人の小人';
const results = str.match(re);
for (const result of results) {
    console.log(result);
}