const kuji = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];

let k;
do {
    k = kuji[Math.floor(Math.random() * kuji.length)];
    console.log(k);
} while(k !== '大吉');