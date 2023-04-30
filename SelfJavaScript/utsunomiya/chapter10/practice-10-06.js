const fruits = { banana: 'うまい', apple: '普通', orange: '微妙',
                    other: { grape: 'うまい'}};

console.log(fruits.constructor);

const { banana, orange} = fruits;
const json = JSON.stringify({banana: banana, orange: orange});
localStorage.setItem("fruits", json);

for (const key of Object.keys(fruits)) {
    console.log(`${key}:${fruits[key]}`);
}

function getFruitsByValue(fruits, value) {
    let result = [];
    for (const key of Object.keys(fruits)) {
        if (typeof fruits[key] === 'string') {
            if (fruits[key] === 'うまい') {
                result.push(key);
            }
        } else if (typeof fruits[key] === 'object') {
            result.push(...getFruitsByValue(fruits[key], value));
        } else {
            throw new TypeError("値が文字列または連想配列ではありません。");
        }   
    }
    return result;
} 

console.log(getFruitsByValue(fruits, 'うまい'));



