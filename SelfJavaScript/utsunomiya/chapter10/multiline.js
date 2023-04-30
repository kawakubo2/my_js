const target = "101匹わんちゃん\n7人の小人";

const pattern = /^\d+/mg;

const results = target.match(pattern);

for (const result of results) {
    console.log(result);
}