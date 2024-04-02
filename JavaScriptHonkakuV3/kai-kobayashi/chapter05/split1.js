const str = 'みかん\tりんご\tぶどう  ';
console.log(str.split('\t'));

console.log('-'.repeat(10));

const words = ['ﾜｶﾞﾊｲﾊﾈｺﾃﾞｱﾙ', 'ﾗｼｮｳﾓﾝ', 'ﾎﾞｯﾁｬﾝ'];

const type = 'NFKD';
for (const word of words) {
    console.log(`${word} => ${word.normalize(type)}`);
}