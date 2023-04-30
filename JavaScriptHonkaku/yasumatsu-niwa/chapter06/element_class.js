const list = document.getElementsByClassName('my');

for (let i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
}