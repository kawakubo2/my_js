const str = localStorage.getItem('items');
const data = JSON.parse(str);
for (const book of data['books']) {
    console.log(book);
}