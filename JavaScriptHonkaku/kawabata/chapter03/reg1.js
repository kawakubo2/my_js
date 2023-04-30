let str = 'abc<div>183720398</div>89183';
let pattern1 = /<.+?>/g;
let result = str.match(pattern1);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
