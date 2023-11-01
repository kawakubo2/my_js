const fruits= new Map([
    ["apple", "リンゴ"],
    ["orange", "オレンジ"],
    ["melon", "メロン"],
    ["grape", "葡萄"],
    ["strawberry", "苺"]
  ]);

  Array.from(fruits.entries()).map((item, index) => {
    console.log(item);
  });