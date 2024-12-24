/*
1年2か月3日後を求める
*/
const today = new Date();
today.setFullYear(today.getFullYear() + 1);
today.setMonth(today.getMonth() + 2);
today.setDate(today.getDate() + 3);
console.log(today.toLocaleDateString());