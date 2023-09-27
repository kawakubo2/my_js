const re = /^\d+/gm;
const str = '101匹ワンちゃん。\n7人の小人。\n3匹の子豚。\n7人の侍。';

const results = str.match(re);
for (const result of results) {
    console.log(result);
}