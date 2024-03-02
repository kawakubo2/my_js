const score = 79;

if (score >= 60) {
    console.log('合格');
} else {
    console.log('不合格');
}
/*
条件演算子(オペランドが3個あることから三項演算子と呼ぶ人もいるが、
将来的に三項演算子が増えた場合に使用できなくなるので避けた方がいい)
*/
const result = score >= 60 ? '合格': '不合格';
console.log(result);
console.log(score >= 70 ? '合格': '不合格');

/*
<p style="color: <script>score >= 60 ? 'blue': 'red';</script>">xxx</p>
*/