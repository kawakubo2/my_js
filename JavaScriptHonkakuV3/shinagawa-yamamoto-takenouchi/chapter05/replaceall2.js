const re = /<.+?>(.+?)<.+?>/;
const str = '<div>こんにちは</div>';

const result = str.match(re);
console.log(result[1]);