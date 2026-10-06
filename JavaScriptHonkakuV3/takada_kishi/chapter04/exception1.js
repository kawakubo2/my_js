const member = {
  name: '山田太郎',
  age: 33,
  weight: 70,
  height: 170
};

try {
  console.log(member.name.length);
  console.log(`年齢: ${member.age}`);
} catch(e) {
  console.log(e.message);
}

/*
try {
  データベースから授業記録を取得;
  授業記録を元に請求書のPDFファイルの作成;
  請求書を添付してメール送信;
} catch(e) {
  console.log(e.message);
}

例外処理がなかった時代

if (データベースから授業記録を取得) {
  if (授業記録を元に請求書のPDFファイルの作成) {
    if (請求書を添付してメール送信) {

    } else {

    }

  } else {

  }
} else {

}
*/