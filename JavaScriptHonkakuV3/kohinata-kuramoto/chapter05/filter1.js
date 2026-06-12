const words = ['banana', 'sun flower', 'water melon', 'grape', 'tennis', 'tomcat'];

const over10words = words.filter((w) => w.length >= 10);
console.log(over10words);

const capitalizedWords = words.map((w) => {
  const wordParts = w.split(" ");
  return wordParts.map((w) => w.substring(0, 1).toUpperCase() + w.substring(1).toLocaleLowerCase()).join(" ");
})

console.log(capitalizedWords);

// Stream API
words
  .filter((w) => w.length >= 10)
  .map((w) => w.split(" ").map((w) => 
      w.substring(0, 1).toUpperCase() + w.substring(1).toLocaleLowerCase()).join(" "))
  .forEach((w) => console.log(w));

