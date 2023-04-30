const s1 = "日月火水木金土";
/*
曜日の文字列「日月火水木金土」を引数として受け取り、
曜日の配列を作り、返す関数。
戻り値は
['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', 
 '金曜日', '土曜日']
の形式
*/
function create_day_of_week_list(str) {
    let result = [];
    for (let w of str) {
        result.push(w + "曜日");
    }
    return result;
}

const weekdays = create_day_of_week_list(s1);
console.log(weekdays);