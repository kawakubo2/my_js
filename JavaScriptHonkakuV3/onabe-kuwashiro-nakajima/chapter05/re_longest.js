const str = '<p><strong>お問い合わせ</strong>はこちら<a href="contact.html"><img src="faq.jpg" /></a></p>';
const re = /<.+?>/g;

const result = str.match(re);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
