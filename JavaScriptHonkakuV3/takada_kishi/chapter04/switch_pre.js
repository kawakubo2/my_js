const rank = 'B';

if (rank === 'A') {
  console.log('Aランクです。');
} else if (rank === 'B') {
  console.log('Bランクです。');
} else if (rank === 'C') {
  console.log('Cランクです。');
} else {
  console.log('ランク外です。');
}

/*
SQL

CASE 
  WHEN rank = 'A' THEN 'Aランクです。'
  WHEN rank = 'B' THEN 'Bランクです。'
  WHEN rank = 'C' THEN 'Cランクです。'
  ELSE 'ランク外です'
END
*/