/*
親子セレクタ
親要素 > 子要素
#category0 > .vegetable
*/
const vegetables = document.querySelectorAll('#category0 > .vegetable');
for (const v of vegetables) {
    v.style.backgroundColor = 'lemonchiffon';
}

/*
祖先 子孫
#python a
*/
const anchors = document.querySelectorAll('#Python a');
let n = 1;
for (const a of anchors) {
    console.log(a.href); // 属性値の取得(要素名.属性名で取得可能)
    a.classList.add('python-related'); // class属性の追加
    a.id = n;
    n++;
}

/*
ノード・ウォーキング
*/
console.log('---< options >---');
const food = document.querySelector('#food');
const options = food.options;
for (const option of options) {
    console.log(`値=${option.value} 内容=${option.textContent}`);
}

console.log('---< firstElementChild ---> nextElementSibling >---');
let child = food.firstElementChild;
while (child) {
    console.log(`値=${child.value} 内容=${child.textContent}`);
    child = child.nextElementSibling;
}

document.querySelector('#remove').addEventListener('click', () => {
    for (const a of anchors) {
        a.classList.remove('python-related');
    }
});
document.querySelector('#add').addEventListener('click', () => {
    for (const a of anchors) {
        a.classList.add('python-related');
    }
});