function getOptionValues(id) {
  const result = [];
  const target = document.querySelector(`#${id}`);
  let child = target.firstElementChild;
  while (child) {
    result.push(child.value);
    child = child.nextElementSibling;
  }
  return result;
}

const foods = getOptionValues('food');
console.group('好きな食べ物');
foods.forEach(f => console.log(f));
console.groupEnd('好きな食べ物');

const sports = getOptionValues('sports');
console.group('好きなスポーツ');
sports.forEach(s => console.log(s));
console.groupEnd('好きなスポーツ');