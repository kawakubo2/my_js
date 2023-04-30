const list = document.querySelectorAll('#list .external');
for (let i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
}