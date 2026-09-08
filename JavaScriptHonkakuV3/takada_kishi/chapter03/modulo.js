const lottery = 1420922;

const firstPrize = 420922;
const secondPrize = 4812;
const thirdPrize = 84;
const fourthPrize = 9;

if (lottery % 1000000 === firstPrize) {
  console.log('1億円！！！');
} else if (lottery % 10000 === secondPrize) {
  console.log('100万円！！');
} else if (lottery % 100 === thirdPrize) {
  console.log('1万円！');
} else if (lottery % 10 === fourthPrize) {
  console.log('200円');
} else {
  console.log('外れ');
}