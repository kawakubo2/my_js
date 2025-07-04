'use strict';

const member = Object.create(Object.prototype, {
    name: {
        value: '田中一郎',
        configurable: true,
        enumerable: true,
    },
    birth: {
        get() {
            return this._birth;
        },
        set(value) {
            this._birth = value;
        },
        configurable: true,
        enumerable: true
    },
    memo: {
        get() {
            return this._memo;
        },
        set(value) {
            this._memo = value;
        },
        configurable: true,
        enumerable: true
    }
});

// member.name = '田中一郎';
member.birth = new Date(1970, 6, 4);
member.memo = '正式入部しました。';

// member.name = '山田太郎';

console.log(`名前: ${member.name}`);
console.log(`生年月日: ${member.birth.toLocaleDateString()}`);
console.log(`メモ: ${member.memo}`);