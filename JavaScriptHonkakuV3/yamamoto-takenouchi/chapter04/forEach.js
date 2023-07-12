const data = ['apple', 'orange', 'banana'];
data.forEach(function(value, index, array) {
    console.log(`値: ${value} index: ${index}`);
});
data.forEach((value, index, array) => console.log(`${value} ${index}`));