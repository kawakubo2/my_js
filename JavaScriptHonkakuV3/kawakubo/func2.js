/*
 distance: スタート地点からゴール地点までの距離(km)
 x_speed: xと言う愛永の自動車の速度(km/h)
 y_speed: yと言う愛永の自動車の速度(km/h)

 速い方の自動車が遅い方の自動車の何分後に出発できるか？
*/
function delay(distance, x_speed, y_speed) {
  return Math.abs(Math.round((distance / x_speed - distance / y_speed) * 60));
}

x = 45;
y = 40;

d = 120;

console.log(`速い方の自動車は${delay(d, x, y)}分遅れて出発できます。`);

