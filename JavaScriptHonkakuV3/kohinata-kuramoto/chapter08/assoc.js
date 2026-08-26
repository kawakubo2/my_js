// 連想配列
const employeeAssoc = {
  '1001': '田中一郎',
  '1002': '鈴木次郎',
  '1003': '横山花子'
};

if (employeeAssoc['1002']) {
  console.log(employeeAssoc['1002']);
} else {
  console.log('該当する社員はいません。');
}

if (employeeAssoc['1004']) {
  console.log(employeeAssoc['1004']);
} else {
  console.log('該当する社員はいません。');
}