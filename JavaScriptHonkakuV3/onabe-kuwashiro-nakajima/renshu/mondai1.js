const age = 35;

if (!/^\d+$/.test(age)) {
  throw new Error("年齢は整数値を入力してください");
}
if (age < 0) {
  throw new Error("年齢は0以上を入力してください");
}

const gender = "F";
if (!(gender === "F" || gender === "M")) {
  throw new Error("性別はFまたはMを入力してください。");
}

let price = 0;
if (gender === "F") {
  if (age <= 20) {
    price = 2000;
  } else if (age <= 50) {
    price = 2200;
  } else if (age <= 70) {
    price = 2400;
  } else {
    price = 2600;
  }
} else {
  if (age <= 20) {
    price = 2400;
  } else if (age <= 50) {
    price = 2800;
  } else if (age <= 70) {
    price = 3200;
  } else {
    price = 3600;
  }
}

console.log(`料金: ${price}円`);
