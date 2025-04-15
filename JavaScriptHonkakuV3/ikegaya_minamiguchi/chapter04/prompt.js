let age = null;

do {
  try {
    age = prompt("年齢: ");
    if (!/^[0-9]+$/.test(age)) {
      console.log('整数値を入力してください');
      age = -1;
    } else {
      age = Number(age);
      if (age < 0) {
        console.log('年齢は0以上の整数値を入力してください');
      }
    }
  } catch (e) {
    console.log(e.message);
    age = -1;
  }
} while(age < 0);

console.log(`入力した年齢: ${age}`);