const now = new Date();
const hour = now.getHours();

let greet = '';
if (hour <= 11) {
  greet = 'おはようございます！';
} else if (hour <= 15) {
  greet = 'こんにちは！';
} else {
  greet = 'こんばんは！';
}
console.log(greet);
console.log(now.toLocaleTimeString());
