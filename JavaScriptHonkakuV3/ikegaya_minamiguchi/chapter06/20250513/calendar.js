/*
閏年であれば1を、閏年でなければ0を返す巻数
閏年の判定
以下の(1)または(2)を満たした場合、閏年
それ以外は閏年ではない
(1) 4の倍数だが、100の倍数ではない
(2) 400の倍数
*/
function is_leap_year(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 1: 0
}

function get_last_day(year, month) {
  const last_years = [
    [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ];
  return last_years[is_leap_year(year)][month];
}

/*
年、月、日をもとに曜日を計算して数値として返す
0:日 1:月 2:火 3:水 4:木 5:金 6:土
*/
function get_day_of_week(year, month, day) {
  if (month < 3) {
    year--;
    month += 12;
  }
  return (year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + 
    Math.floor((13 * month + 8) / 5) + day) % 7;
}

function print_header(year, month) {
  console.log(`       ${year}年${month}月`);
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  let line = '';
  for (const d of days) {
    line += ` ${d}`;
  }
  console.log(line);
}

function print_body(year, month) {
  let line = '';
  line += ' '.repeat(get_day_of_week(year, month, 1) * 3);
  for (let day = 1; day <= get_last_day(year, month); day++) {
    const tday = String(day).padStart(3, ' ');
    line += tday;
    if (get_day_of_week(year, month, day) === 6) {
      console.log(line);
      line = '';
    }
  }
  if (get_day_of_week(year, month, get_last_day(year, month)) !== 6) {
    console.log(line);
  }
}

function print_month(year, month) {
  print_header(year, month);
  print_body(year, month);
}

let year = 2025;
for (let month = 1; month <= 12; month++) {
  print_month(year, month);
  console.log('-'.repeat(21));
}