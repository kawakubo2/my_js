// こんにちは、山田さん。2024年03月号のお知らせです。

function message(strings, ...vargs) {
    const [greeting, punctuation, oshirase] = strings;
    const [name, yearmonth] = vargs;
    console.log(`${greeting}${name}${punctuation}${yearmonth}${oshirase}`);
}

const namae = '山田'
const year_month = '2024年03月'
message(['こんにちは、', 'さん。', '号のお知らせです。'], namae, year_month);
message`こんにちは、${namae}さん。${year_month}号のお知らせです。`;
