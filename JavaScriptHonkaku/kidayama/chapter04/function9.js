fruits = ["バナナ", "イチゴ", "バナナ", "ブドウ", "イチゴ", "ナシ",
          "ブドウ", "リンゴ", "バナナ", "ナシ", "メロン", "バナナ"];
/*
 戻り値の例:
 {"バナナ": 4, "イチゴ": 2, "ブドウ": 2, "リンゴ": 1, "ナシ": 2, "メロン": 1}
*/

function fruit_counter(fruits) {
    const counter = new Map();
    for (const fruit of fruits) {
        if (counter.has(fruit)) {
            counter.set(fruit, counter.get(fruit) + 1);
        } else {
            counter.set(fruit, 1);
        }
    }
    return counter;
}

const result = fruit_counter(fruits);
console.log(result);
for (let [fruit, cnt] of result.entries()) {
    console.log(`${fruit}: ${cnt}`);
}