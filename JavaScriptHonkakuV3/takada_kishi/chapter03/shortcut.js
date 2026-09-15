// scoreは0～100
let score = 120;
(score >= 0 && score <= 100) || console.log('点数は0～100の範囲で指定してください');

score = 80;
(score >= 0 && score <= 100) || console.log('点数は0～100の範囲で指定してください');

score = 59;

score < 60 && console.log('再試験です！');
