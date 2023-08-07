const members = {"1001": "山田太郎", "1002": "横山花子", "1003": "田中一郎",
                 "1004": "山本久美子", "1005": "鈴木二郎"};

while(true) {
    const id = prompt('メンバーID: ');
    const result = members[id];
    if (result) {
        console.log(`会員番号${id}の氏名は${result}です。`);
    } else {
        console.log(`会員番号${id}は存在しません。`);
    }
    const s = prompt("続ける(y/n)");
    if (s !== "y") {
        break;
    }
}