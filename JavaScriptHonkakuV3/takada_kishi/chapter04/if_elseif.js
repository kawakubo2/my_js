const numbers = [-20, 0, 5, 10, 15, 20, 30, 1000];


for (const n of numbers) {
  if (n >= 20) {
    console.log(`nは20以上です。${n}`);
  } else if (n >= 10) {
    console.log(`nは10以上です。${n}`);
  } else if (n >= 0) {
    console.log(`nは0以上です。${n}`);
  } else {
    console.log(`nは0未満です。${n}`);
  }
}