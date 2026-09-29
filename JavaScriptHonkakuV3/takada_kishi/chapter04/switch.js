const rank = 'D';

switch(rank) {
  case 'A':
    console.log('Aランクです。');
    break;
  case 'B':
    console.log('Bランクです。');
    break;
  case 'C':
    console.log('Cランクです。');
    break;
  default:
    console.log('ランク外です。');
}

/*
SQL

CASE rank
  WHEN 'A' THEN 'Aランクです。'
  WHEN 'B' THEN 'Bランクです。'
  WHEN 'C' THEN 'Cランクです。'
  ELSE 'ランク外です。'
END
*/

/*
switch(rank) {
  case 'A' | 'B' | 'C':
    console.log('合格');
  default:
    console.log('不合格');
}
*/

const liquor = 'ウィスキー';

switch (liquor) {
  case '焼酎':
  case 'ウィスキー':
  case 'ウォッカ':
    console.log('蒸留酒です。');
    break;
  case '日本酒':
  case 'ワイン':
    console.log('醸造酒です。');
}

const 蒸留酒 = ['焼酎', 'ウィスキー', 'ウォッカ'];
const 醸造酒 = ['日本酒', 'ワイン'];

if (蒸留酒.includes(liquor)) {
  console.log('蒸留酒です。');
} else if (醸造酒.includes(liquor)) {
  console.log('醸造酒です。');
}