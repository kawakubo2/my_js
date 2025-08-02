const data = ['apple', 'orange', 'banana'];

data.forEach((value, index, array) => console.log(value));
data.forEach((fruit, i, array) => console.log(`${i + 1}.${fruit}`));