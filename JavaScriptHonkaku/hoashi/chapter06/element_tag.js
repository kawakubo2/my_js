const list = document.getElementsByTagName('a');
/*
for (let i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}
*/
Array
    .from(list)
    .filter(item => item.href.indexOf('https://') > -1)
    .forEach(item => console.log(item.textContent));