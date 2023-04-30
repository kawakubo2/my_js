const storage = localStorage;
const rec = {width: 6, height: 8, getArea: 
                    function() { return this.width * this.height; }};
console.log('--- localStorageに保存する前 ---');
console.log(rec.getArea());
storage.setItem('rec', JSON.stringify(rec));
const data = JSON.parse(storage.getItem('rec'));
console.log(data.getArea());