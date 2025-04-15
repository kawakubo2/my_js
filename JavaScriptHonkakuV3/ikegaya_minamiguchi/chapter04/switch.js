let rank = 'B';

switch(rank) {
  case 'A':
    console.log('Aランクです');
    break;
  case 'B':
    console.log('Bランクです');
    break;
  case 'C':
    console.log('Cランクです');
    break;
  default:
    console.log('ランク外です');
    break;
}

if (rank === 'A') {
  console.log('Aランクです');
} else if (rank === 'B') {
  console.log('Bランクです');
} else if (rank === 'C') {
  console.log('Cランクです');
} else {
  console.log('ランク外です');
}