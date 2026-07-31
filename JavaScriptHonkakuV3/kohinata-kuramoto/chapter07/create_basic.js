'use strict';

const member = Object.create(Object.prototype, {
  name: {
    value: '佐藤理央',
    writable: true,
    configurable: true,
    enumerable: true
  },
  birth: {
    value: new Date(2010, 5, 25),
    writable: true, // 更新の可否
    configurable: true, // 削除の可否
    enumerable: true // 列挙の可否
  },
  memo: {
    value: '仮入部期間中です。',
    writable: false,
    configurable: true,
    enumerable: true
  }
});

for (const prop in member) {
  console.log(`${prop}: ${member[prop]}`);
}

// delete member['memo'];
// delete member.memo;
member.memo = '正式入部しました。';
